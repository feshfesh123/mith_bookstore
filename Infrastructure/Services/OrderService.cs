using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Entities.OrderAggregate;
using Core.Interfaces;
using Core.Specifications;
using Infrastructure.Identity;

namespace Infrastructure.Services
{
    public class OrderService : IOrderService
    {
        private readonly IBasketRepository _basketRepo;
        private readonly IUnitOfWork _unitOfWork;
        private readonly AppIdentityDbContext _idRepo;
        private readonly IGenericRepository<Order> _orderRepo;
        public OrderService(IBasketRepository basketRepo, IUnitOfWork unitOfWork, AppIdentityDbContext idRepo, IGenericRepository<Order> orderRepo)
        {
            _unitOfWork = unitOfWork;
            _basketRepo = basketRepo;
            _idRepo = idRepo;
            _orderRepo = orderRepo;
        }

        public async Task<Order> CreateOrderAsync(string buyerEmail, string basketId, string shippingAddress)
        {
            var currentUser = _idRepo.Users.FirstOrDefault(u => u.Id == basketId);
            buyerEmail = currentUser.Email;
            // get basket from the repo
            var basket = await _basketRepo.GetBasketAsync(basketId);

            // get items from the product repo & checking for available quantity
            var items = new List<OrderItem>();
            foreach (var item in basket.Items)
            {
                var productItem = await _unitOfWork.Repository<Product>().GetByIdAsync(item.ProductId);
                var itemOrdered = new ProductItemOrdered(productItem.Id, productItem.Name, productItem.PictureUrl);
                var orderItem = new OrderItem(itemOrdered, productItem.Price, item.Quantity);
                _unitOfWork.Repository<Product>().Update(productItem);
                items.Add(orderItem);
            }

            // calc subtotal
            var subtotal = items.Sum(i => i.Price * i.Quantity);

            // create order
            var order = new Order(buyerEmail, items, shippingAddress, subtotal);
            order.Status = "Mới";
            _orderRepo.Add(order);

            // delete basket
            await _basketRepo.DeleteBasketAsync(basketId);
            // return order
            return order;
        }

        public async Task<IReadOnlyList<DeliveryMethod>> GetDeliveryMethodAsync()
        {
            return await _unitOfWork.Repository<DeliveryMethod>().ListAllAsync();
        }

        public async Task<Order> GetOrderByIdAsync(int id, string buyerEmail)
        {
            var spec = new OrdersWithItemsAndOrderingSpecification(id, buyerEmail);
            return await _unitOfWork.Repository<Order>().GetEntityWithSpec(spec);
        }

        public async Task<IReadOnlyList<Order>> GetOrdersForUserAsync(string buyerEmail)
        {
            var orders = (await _orderRepo.ListAllAsync()).Where(x => x.BuyerEmail == buyerEmail);
            return orders.ToList();
        }
    }
}