using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IBasketRepository
    {
        Task<CustomerBasket> GetBasketAsync(string basketId);
        Task<CustomerBasket> UpdateBasketItemAsync(string basketId, BasketItem item);
        Task<CustomerBasket> DeleteBasketItemAsync(string basketId, int itemId);
        Task<bool> DeleteBasketAsync(string basketId);
    }
}