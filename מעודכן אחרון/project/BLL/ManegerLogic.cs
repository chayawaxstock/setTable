using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class ManegerLogic
    {
        public static DAL.SetTable1Entities4 db = new DAL.SetTable1Entities4();

        #region הפונקציה מחזירה את כל המוצרים
        public static List<DTO.Product> GetAllProduct()
        {
            List<DTO.Product> productsDto = new List<DTO.Product>();
            List<DAL.Product> products = db.Products.ToList();
            foreach (var item in products)
            {
                productsDto.Add(DTO.Product.ConvertDBToDto(item));
            }
            return productsDto;
        }
        #endregion

        #region  הוספת מוצר
        public static bool AddProduct(DTO.Product p)
        {
            DAL.Product product = new DAL.Product();
            product.nameProduct = p.nameProduct;
            product.price = p.price;
            product.unitsInStock = p.unitsInStock;
            product.numCategory = p.numCategory;
            product.color = p.color;
            product.model = p.model;
            product.size = p.size;
            product.img = p.img;
            product.active = true;
            product.showInSite = true;
            product.quentityInShop = 20;
            db.Products.Add(product);
            db.SaveChanges();
            return true;
        }
        #endregion

        #region מחיקת מוצר ע""פ מזהה מוצר
        public static bool DeleteProduct(int idProduct)
        {
            var p = db.Products.Where(x => x.idProduct == idProduct).First();
            if (p != null)
            {
                db.Products.Remove(p);
                db.SaveChanges();
                return true;
            }
            return false;
        }
        #endregion

        #region  דיאגרמה
        public static int[] getDiagram()
        {
            int[] daySum = new int[12];
            foreach (var item in db.Orders.ToList())
            {
                if (item.date.Year == DateTime.Now.Year)
                    daySum[item.date.Month] += item.paymant;
            }
            return daySum;
        }
        #endregion
    }
}
