using System.Collections.Generic;

namespace Core.Entities
{
    public class CustomerBasket : BaseEntity
    {
        public CustomerBasket()
        {
        }

        public CustomerBasket(string id)
        {
            UserId = id;
        }

        public string UserId { get; set; }
        public List<BasketItem> Items { get; set; } = new List<BasketItem>();
    }
}