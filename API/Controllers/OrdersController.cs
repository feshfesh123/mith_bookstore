using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos;
using API.Errors;
using API.Extensions;
using AutoMapper;
using Core.Entities.Identity;
using Core.Entities.OrderAggregate;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class OrdersController : BaseApiController
    {
        private readonly IOrderService _orderService;
        private readonly IMapper _mapper;
        private readonly UserManager<AppUser> _userManager;
        private readonly StoreContext _context;
        private readonly IGenericRepository<Order> _repo;
        public OrdersController(IOrderService orderService, IMapper mapper, UserManager<AppUser> userManager, StoreContext context, IGenericRepository<Order> repo)
        {
            _mapper = mapper;
            _orderService = orderService;
            _userManager = userManager;
            _context = context;
            _repo = repo;
        }

        [HttpPost]
        public async Task<ActionResult<Order>> CreateOrder(OrderDto orderDto)
        {
            var email = HttpContext.User.RetrieveEmailFromPrncipal();
            var order = await _orderService.CreateOrderAsync(email, orderDto.BasketId, orderDto.ShipToAddress);

            if (order == null)
            {
                return BadRequest(new ApiResponse(400, "Problem creating oder"));
            }

            return Ok(order);
        }

        [HttpGet("{userId}")]
        public async Task<ActionResult<IReadOnlyList<OrderToReturnDto>>> GetOrdersForUser(string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);
            var orders = _context.Orders.Include(x => x.OrderItems).Where(x => x.BuyerEmail == user.Email).ToList();
            return Ok(_mapper.Map<IReadOnlyList<Order>, IReadOnlyList<OrderToReturnDto>>(orders));
        }

        [HttpGet("/detail/{id}")]
        public async Task<ActionResult<OrderToReturnDto>> GetOrderByIdForUser(int id)
        {
            var email = HttpContext.User.RetrieveEmailFromPrncipal();
            var order = await _orderService.GetOrderByIdAsync(id, email);
            if (order == null)
            {
                return NotFound(new ApiResponse(404));
            }
            return Ok(_mapper.Map<Order, OrderToReturnDto>(order));
        }

        [HttpGet("manager")]
        public async Task<ActionResult<IReadOnlyList<Order>>> GetAll()
        {
            return Ok(await _repo.ListAllAsync());
        }

        [HttpGet("manager/{id}/done")]
        public async Task<ActionResult> Update(int id)
        {
            var entity = await _repo.GetByIdAsync(id);
            entity.Status = entity.Status == "Mới" ? "Hoàn tất" : "Mới";
            _repo.Update(entity);
            return Ok();
        }

        [HttpGet("manager/{id}")]
        public async Task<ActionResult<IReadOnlyList<Order>>> GetById(int id)
        {
            return Ok(await _repo.GetByIdAsync(id));
        }

    }
}