using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class ManegerLogic
    {
        public static DAL.SetTable1Entities5 db = new DAL.SetTable1Entities5();

        #region הפונקציה מחזירה את כל המוצרים
        public static List<DTO.Product> GetAllProduct()
        {
            List<DTO.Product> productsDto = new List<DTO.Product>();
            List<DAL.Product> products = db.Products.Where(p=>p.active==true).ToList();
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
                p.active=false;
                db.SaveChanges();
                return true;
            }
            return false;
        }
        #endregion


#region מחזירה מערך מוצרים לפי מזהה הזמנה
        public static bool editProduct(DTO.Product p)
        {
            var prodDb = db.Products.Find(p.idProduct);
            
            prodDb.nameProduct = p.nameProduct;
            prodDb.price = p.price;
            prodDb.unitsInStock = p.unitsInStock;
            prodDb.numCategory = p.numCategory;
            prodDb.color = p.color;
            prodDb.model = p.model;
            prodDb.size = p.size;
            prodDb.type = p.type;
            prodDb.img = p.img;
            prodDb.active = true;
            prodDb.showInSite = true;
            prodDb.quentityInShop = p.quentityInShop;
            db.SaveChanges();
            return true;
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
