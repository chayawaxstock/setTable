using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class ProductOfOrder
    {
        public int idOrder { get; set; }
        public int idProduct { get; set; }
        public int quantity { get; set; }
        public  Product Product { get; set; }


        public static ProductOfOrder ConvertDBToDto(DAL.ProductOfOrder productOfOrder)
        {
            return new ProductOfOrder()
            {
                idOrder = productOfOrder.idOrder,
                idProduct = productOfOrder.idProduct,
                quantity = productOfOrder.quantity,
                Product=DTO.Product.ConvertDBToDto(productOfOrder.Product)
            };
        }

        public static List<ProductOfOrder> ConvertDBToDtoList(ICollection< DAL.ProductOfOrder> productOfOrder)
        {
            List<ProductOfOrder> p = new List<ProductOfOrder>();
            foreach (var item in productOfOrder)
            {
                p.Add(ConvertDBToDto(item));
            }
            return p;
        }
    }
}
