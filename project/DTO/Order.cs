using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Order
    {
        public int idOrder { get; set; }
        public System.DateTime date { get; set; }
        public int idCustomer { get; set; }
        public int paymant { get; set; }
        public  List<ProductOfOrder> ProductOfOrder { get; set; }
        public static Order ConvertDBToDto(DAL.Order order)
        {
            return new Order()
            {
                idOrder = order.idOrder,
                date = order.date,
                idCustomer = order.idCustomer,
                paymant = order.paymant,
                ProductOfOrder=DTO.ProductOfOrder.ConvertDBToDtoList(order.ProductOfOrders)
            };
        }
    }
}
