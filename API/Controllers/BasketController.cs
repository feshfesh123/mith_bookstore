using System.Threading.Tasks;
using API.Dtos;
using AutoMapper;
using Core.Entities;
using Core.Entities.OrderAggregate;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BasketController : BaseApiController
    {
        private readonly IBasketRepository _basketRepository;
        private readonly IMapper _mapper;
        public BasketController(IBasketRepository basketRepository, IMapper mapper)
        {
            _mapper = mapper;
            _basketRepository = basketRepository;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CustomerBasket>> GetBasketById(string id)
        {
            var basket = await _basketRepository.GetBasketAsync(id);
            if (basket == null)
            {

            }
            return Ok(basket ?? new CustomerBasket(id));
        }

        [HttpPost("{basketId}")]
        public async Task<ActionResult<CustomerBasket>> UpdateBasketItemAsync(string basketId, [FromBody] BasketItem item)
        {
            var updatedBasket = await _basketRepository.UpdateBasketItemAsync(basketId, item);
            return Ok(updatedBasket);
        }

        [HttpDelete("{basketId}")]
        public async Task<ActionResult<CustomerBasket>> DeleteBasketItemAsync(string basketId, [FromBody] BasketItem item)
        {
            var deletedBasket = await _basketRepository.DeleteBasketItemAsync(basketId, item.Id);
            return Ok(deletedBasket);
        }

        [HttpDelete("{basketId}/clean")]
        public async Task<ActionResult<bool>> DeleteBasketAsync(string basketId)
        {
            var deletedBasket = await _basketRepository.DeleteBasketAsync(basketId);
            return Ok(deletedBasket);
        }
    }
}