using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace BLL
{
    public class EditTableLogic
    {
        public static DAL.SetTable1Entities5 db = new DAL.SetTable1Entities5();

        public static List<DTO.Product> getPlate()
        {
            var t = db.EditTables.ToList();
            List<DTO.Product> list = new List<DTO.Product>();
            foreach (var item in t)
            {
                var p = db.Products.Where(ppp => ppp.idProduct == item.idPlate).First();
                if (list.FirstOrDefault(pp => pp.idProduct == p.idProduct) == null)
                    list.Add(DTO.Product.ConvertDBToDto(p));
            }
            byte[] Bytes = new byte[100000000];
            foreach (var item in list)
            {
                string path = HttpContext.Current.Server.MapPath("~/File");
                string imagePath = path + "\\" + item.img;
                Bytes = File.ReadAllBytes(imagePath);
                item.imgBase64 = Convert.ToBase64String(Bytes);
            }
            return list;
        }

        public static List<DTO.Product> getPlateBig()
        {
            var t = db.EditTables.ToList();
            List<DTO.Product> list = new List<DTO.Product>();
            foreach (var item in t)
            {
                var p = db.Products.Where(ppp => ppp.idProduct == item.idPlateBig).First();
                if (list.FirstOrDefault(pp => pp.idProduct == p.idProduct) == null)
                    list.Add(DTO.Product.ConvertDBToDto(p));
            }
            byte[] Bytes = new byte[100000000];
            foreach (var item in list)
            {
                string path = HttpContext.Current.Server.MapPath("~/File");
                string imagePath = path + "\\" + item.img;
                Bytes = File.ReadAllBytes(imagePath);
                item.imgBase64 = Convert.ToBase64String(Bytes);
            }
            return list;
        }

        public static List<DTO.Product> getGlass()
        {
            var t = db.EditTables.ToList();
            List<DTO.Product> list = new List<DTO.Product>();
            foreach (var item in t)
            {
                var p = db.Products.Where(ppp => ppp.idProduct == item.idGlass).First();
                if(list.FirstOrDefault(pp=>pp.idProduct==p.idProduct)==null)
                list.Add(DTO.Product.ConvertDBToDto(p));
            }
            byte[] Bytes = new byte[100000000];
            foreach (var item in list)
            {
                string path = HttpContext.Current.Server.MapPath("~/File");
                string imagePath = path + "\\" + item.img;
                Bytes = File.ReadAllBytes(imagePath);
                item.imgBase64 = Convert.ToBase64String(Bytes);
            }
            return list;
        }

        public static string getImageEditTable(int idPlate, int idPlateBig, int idGlass)
        {
            var i = db.EditTables.Where(p => p.idPlate == idPlate && p.idGlass == idGlass && p.idPlateBig == idPlateBig).First();
            byte[] Bytes = new byte[100000000];
            string path = HttpContext.Current.Server.MapPath("~/File");
            string imagePath = path + "\\" + i.imageAll;
            Bytes = File.ReadAllBytes(imagePath);
            return Convert.ToBase64String(Bytes);
        }
    }
}