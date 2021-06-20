using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Entities
{
    public class Discount : BaseEntity
    {
        public string Name { get; set; }
        public int Value { get; set; }
    }
}
