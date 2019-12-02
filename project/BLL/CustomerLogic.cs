using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class CustomerLogic
    {
        public static DAL.SetTable1Entities4 db = new DAL.SetTable1Entities4();

        #region מחזירה את כל ההזמנות הקודמות לפי מזהה לקוח
        public static List<DTO.Order> GetAllPreviousOrders(int idCustomer)
        {
            List<DTO.Product> listProducts = new List<DTO.Product>();
            List<DTO.Order> ordersList = new List<DTO.Order>();
            var Orders = db.Orders.Where(s => s.idCustomer == idCustomer).ToList();
            foreach (var item in Orders)
            {
                ordersList.Add(DTO.Order.ConvertDBToDto(item));

            }
            return ordersList;
        }
        #endregion
        public static DAL.Customer GetCustomerById(int id)
        {
            return db.Customers.Find(id);
        }
        #region הוספת לקוח חדש
        public static bool addCustomer(DTO.Customer customer)
        {
            DAL.Customer newCustomer = new DAL.Customer();
            newCustomer.nameCustomer = customer.nameCustomer;
            newCustomer.password = customer.password;
            newCustomer.phone = customer.phone;
            newCustomer.street = customer.street;
           newCustomer. email= customer.email;
            db.Customers.Add(newCustomer);
            db.SaveChanges();
            return true;
        }
        #endregion

        #region בדיקה האם שם משתמש וסיסמא נכונים
        public static DTO.Customer validCustomer(string nameCustomer, string password)
        {
            var q = db.Customers.FirstOrDefault(x => x.nameCustomer==nameCustomer && x.password== password);
            if (q != null)
                return DTO.Customer.ConvertDBToDto(q);
            else
            return null;
        }
        #endregion

        #region שליחת מייל למשתמש
        public bool SendEmail(int id,List<DTO.Product>products)
        {
            var customer = db.Customers.First(p => p.idCustomer == id);
            DAL.Order order = new DAL.Order();
            order.Customer = customer;
            order.date = DateTime.Now;
            order.paymant = int.Parse(products.Sum(p => p.qty * p.price).ToString());
            db.Orders.Add(order);
            db.SaveChanges();
            var body= BLL.SendEmailLogic.createEmailBody("מספר הזמנה"+order.idOrder,order.date.ToString(),order.paymant.ToString());
            BLL.SendEmailLogic.SendHtmlFormattedEmail("sd", body, customer.email);
            return true;
        }
        #endregion
    }
}