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
        [Route("sendEmail/{idCustomer}")]
        public bool SendEmail(int idCustomer,[FromBody]List<DTO.Product>products)
        {
            
            MailMessage mail = new MailMessage();
            SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");
            mail.From = new MailAddress("shiran79999@gmail.com");
            mail.To.Add("e6739995@gmail.com");
            mail.Subject = "Test Mail";
            mail.Body = "";

            SmtpServer.Port = 587;
            SmtpServer.Credentials = new System.Net.NetworkCredential("shiran79999@gmail.com", "ssss3188");
            SmtpServer.EnableSsl = true;
            SmtpServer.Send(mail);
            return true;
            #endregion
        }
    }
}