using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Hosting;

namespace BLL
{
    public class ProductLogic
    {
        public static DAL.SetTable1Entities4 db = new DAL.SetTable1Entities4();
        #region  כל המוצרים
        public static List<DTO.Product> GetAllProduct()
        {
            List<DTO.Product> productsDto = new List<DTO.Product>();
            var allP = db.Products.ToList();
            List<DAL.Product> products = db.Products.Where(p => p.active == true && p.showInSite == true && p.quentityInShop > 0).ToList();
            foreach (var item in products)
            {
                productsDto.Add(DTO.Product.ConvertDBToDto(item));
            }
            byte[] Bytes = new byte[100000000];
            foreach (var item in productsDto)
            {
                string path = HttpContext.Current.Server.MapPath("~/File");
                string imagePath = path + "\\" + item.img;
                Bytes = File.ReadAllBytes(imagePath);
                item.imgBase64 = Convert.ToBase64String(Bytes);
            }
            return productsDto;
        }
        #endregion

        #region קבלת מוצר ע"פ המזהה
        public static DTO.Product GetProductById(int productId)
        {
            DTO.Product product = DTO.Product.ConvertDBToDto(db.Products.Find(productId));
            if (product == null)
                return null;
            return product;
        }
        #region מחזירה מוצרים מעיצוב שולחן ומוסיפה אותם לסל לפי כמות סועדים
        public static List<DTO.Product> getToCart(int plate, int glass, int numDinner)
        {
            List<DTO.Product> products = new List<DTO.Product>();
            var plateC = DTO.Product.ConvertDBToDto(db.Products.Find(plate));
            var glas = DTO.Product.ConvertDBToDto(db.Products.Find(glass));
            // var plateC = DTO.Product.ConvertDBToDto(db.Products.Find(plate));
            plateC.qty= numDinner / plateC.unitsInStock;
            if (numDinner % plateC.unitsInStock > 0)
                plateC.qty++;
            products.Add(plateC);
            glas.qty = numDinner / glas.unitsInStock;
            if (numDinner % glas.unitsInStock > 0)
                glas.qty++;
            products.Add(glas);
            return products;

        }
        #endregion
        #endregion

        #region מחזירה מוצרים לפי מזהה קטגוריה
        public static List<DTO.Product> GetProductsByIdCategory(int categoryId)
        {
            List<DTO.Product> products = new List<DTO.Product>();
            var res = db.Products.Where(p => p.numCategory == categoryId);
            var ff = res.ToList();
            foreach (var item in ff)
            {
                products.Add(DTO.Product.ConvertDBToDto(item));

            }
            return products;
        }
        #endregion

        #region  מחזירה מוצרים לפי שם קטגוריה
        public static List<DTO.Product> GetProductsByNameCategory(string category)
        {
            var q = db.Categories.Where(x => x.nameCategory == category).FirstOrDefault();
            //var p = from c in db.Category
            //        where c.nameCategory==category
            //        select c.numCategory;

            List<DTO.Product> products = new List<DTO.Product>();
            products = GetProductsByIdCategory(q.numCategory);
            return products;
        }

        #endregion

        #region סינון לפי צבע
        public static List<DTO.Product> GetProductByColor(string color)
        {
            List<DTO.Product> productsDto = new List<DTO.Product>();
            List<DAL.Product> products = db.Products.Where(x => x.color == color).ToList();
            foreach (var item in products)
            {
                productsDto.Add(DTO.Product.ConvertDBToDto(item));
            }
            return productsDto;
        }
        #endregion

        #region  בודקת האם יש כמות מספיקה בחנות
        public static bool validQty(DTO.Product item)
        {
            DAL.Product product = new DAL.Product();
            var i = db.Products.First(f => f.idProduct == item.idProduct);
            if (i.quentityInShop >= item.qty)
            {
                //product.quentityInShop = product.quentityInShop - qty;
                //db.SaveChanges();
                return true;
            }
            return false;
        }

        #endregion

        #region סינון לפי צורה
        public static List<DTO.Product> GetProductByModel(string type)
        {
            List<DTO.Product> productsDto = new List<DTO.Product>();
            List<DAL.Product> products = db.Products.Where(x => x.type == type).ToList();
            // List<DAL.Product> products = new List<DAL.Product>();
            //db.Products.Where(x => x.type == type).ToList();
            foreach (var item in products)
            {
                productsDto.Add(DTO.Product.ConvertDBToDto(item));
            }
            return productsDto;
        }
        #endregion

        #region מחזירה כמות מוצרים שצריך לקנות למספר סועדים שקבלה
        public static List<int> orderByAmountOfDiners(int idPlate, int idGlass, int numberOfDiners)
        {
            DAL.Product product = new DAL.Product();
            var q = db.Products.Where(x => x.idProduct == idPlate).First();//צלחת
            var o = db.Products.Where(s => s.idProduct == idGlass).First();//כוס
            int numQ = numberOfDiners / q.unitsInStock;
            if (numberOfDiners % q.unitsInStock > 0)
                numQ++;
            int numO = numberOfDiners / o.unitsInStock;
            if (numberOfDiners % o.unitsInStock > 0)
                numO++;
            List<int> num = new List<int>() { numQ, numO };
            return num;
        }
        #endregion
    }
}