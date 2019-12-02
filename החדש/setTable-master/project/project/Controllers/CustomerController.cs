using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Web.Http;

namespace project.Controllers
{
    [RoutePrefix("api/customer")]
    public class CustomerController : ApiController
    {
        [HttpGet]
        #region מחזירה את כל ההזמנות הקודמות לפי מזהה לקוח
        [Route("getAllPreviousOrders/{id}")]
        public List<DTO.Order> GetAllPreviousOrders(int id)
        {
           return BLL.CustomerLogic.GetAllPreviousOrders(id);
        }

        #endregion

        [HttpGet]
        #region  בדיקה האם שם משתמש וסיסמא נכונים
        [Route("CheckUserDataIntegrity/{nameCustomer}/{passwordC}")]
        public DTO.Customer CheckUserDataIntegrity(string nameCustomer, string passwordC)
        {
            return BLL.CustomerLogic.validCustomer(nameCustomer, passwordC);          
        }
        #endregion


        #region  הוספת לקוח
        [HttpPost]
        [Route("addCustomer")]
        public void addCustomer(DTO.Customer customer)
        {
             BLL.CustomerLogic.addCustomer(customer);
        }
        #endregion

        #region שליחת מייל למשתמש

        [HttpPost]
        [Route("sendEmail/{idCustomer}/{pay}")]
        public bool SendEmail(int idCustomer,int pay,[FromBody]List<DTO.Product>products)
        {
          var cus=  BLL.CustomerLogic.GetCustomerById(idCustomer);
            var body = BLL.SendEmailLogic.createEmailBody("",DateTime.Now.ToShortDateString(), pay.ToString());
            BLL.SendEmailLogic.SendHtmlFormattedEmail("ההזמנה שלך", body, cus.email);
           
            return true;
            #endregion
        }
    }
}