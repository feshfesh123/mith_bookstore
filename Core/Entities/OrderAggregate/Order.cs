using System;
using System.Collections.Generic;

namespace Core.Entities.OrderAggregate
{
    public class Order : BaseEntity
    {
        public Order()
        {
        }

        public Order(string buyerEmail,
                     IReadOnlyList<OrderItem> orderItems,
                     string shipToAddress,
                     double subTotal)
        {
            BuyerEmail = buyerEmail;
            OrderItems = orderItems;
            SubTotal = subTotal;
            ShipToAddress = shipToAddress;
        }

        public string BuyerEmail { get; set; }
        public DateTimeOffset OrderDate { get; set; } = DateTimeOffset.Now;
        public string ShipToAddress { get; set; }
        public IReadOnlyList<OrderItem> OrderItems { get; set; }
        public double SubTotal { get; set; }
        public string Status { get; set; }
        public double GetTotal()
        {
            return SubTotal;
        }
    }
}