using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class OrderBasket
    {
        public int idProduct { get; set; }
        public int quantity { get; set; }

        public static OrderBasket ConvertDBToDto(DAL.OrderBasket orderBasket)
        {
            return new OrderBasket()
            {
                idProduct = orderBasket.idProduct,
                quantity = (int)orderBasket.quantity
            };
        }
    }
}
