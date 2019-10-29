using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Product
    {
        public int idProduct { get; set; }
        public string nameProduct { get; set; }
        public double price { get; set; }
        public int unitsInStock { get; set; }
        public int numCategory { get; set; }
        public string color { get; set; }
        public string model { get; set; }
        public string size { get; set; }
        public string img { get; set; }
        public string imgBase64 { get; set; }
        public int quentityInShop { get; set; }
        public string type { get; set; }

        public int qty = 0;

        public static Product ConvertDBToDto(DAL.Product product)
        {
            return new Product()
            {
                idProduct = product.idProduct,
                nameProduct = product.nameProduct,
                price = product.price,
                unitsInStock = product.unitsInStock,
                numCategory = product.numCategory,
                color = product.color,
                model = product.model,
                size = product.size,
                img = product.img,
                quentityInShop=product.quentityInShop,
                //type=product.type
            };
        }
    }
}
