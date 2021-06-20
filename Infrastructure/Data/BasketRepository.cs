using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using StackExchange.Redis;

namespace Infrastructure.Data
{
    public class BasketRepository : IBasketRepository
    {
        private readonly StoreContext _context;
        public BasketRepository(StoreContext context)
        {
            _context = context;
        }

        public async Task<CustomerBasket> GetBasketAsync(string basketId)
        {
            var data = _context.CustomerBasket.Include(x => x.Items).FirstOrDefault(x => x.UserId == basketId);

            if (data == null)
            {
                var cart = new CustomerBasket
                {
                    UserId = basketId,
                    Items = new List<BasketItem>()
                };
                _context.CustomerBasket.Add(cart);
                _context.SaveChanges();
                return cart;
            }

            return data;
        }

        public async Task<CustomerBasket> UpdateBasketItemAsync(string basketId, BasketItem item)
        {
            var basket = _context.CustomerBasket.Include(x => x.Items).FirstOrDefault(x => x.UserId == basketId);

            if (basket == null)
            {
                basket = new CustomerBasket { UserId = basketId, Items = new List<BasketItem>() };
            }

            var entity = basket.Items.FirstOrDefault(x => x.Id == item.Id);
            if (entity != null)
            {
                entity.Quantity = item.Quantity;
            }
            else
            {
                basket.Items.Add(item);
            }

            _context.CustomerBasket.Update(basket);
            _context.SaveChanges();
            return basket;
        }


        public async Task<CustomerBasket> DeleteBasketItemAsync(string basketId, int itemId)
        {
            var basket = _context.CustomerBasket.Include(x => x.Items).FirstOrDefault(x => x.UserId == basketId);

            if (basket != null)
            {
                var entity = basket.Items.FirstOrDefault(x => x.Id == itemId);
                basket.Items.Remove(entity);
                _context.CustomerBasket.Update(basket);
                _context.SaveChanges();
                return basket;
            }

            return null;
        }

        public async Task<bool> DeleteBasketAsync(string basketId)
        {
            var basket = _context.CustomerBasket.Include(x => x.Items).FirstOrDefault(x => x.UserId == basketId);

            if (basket != null)
            {
                _context.CustomerBasket.Remove(basket);
                _context.SaveChanges();
                return true;
            }

            return false;
        }
    }
}