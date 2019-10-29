using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace BLL
{
   public class SendEmailLogic
    {
        public static string createEmailBody(string header,string date,string paymant)
        {
            string body = string.Empty;
            //using streamreader for reading my htmltemplate   
            using (StreamReader reader = new StreamReader(HttpContext.Current.Server.MapPath("~/File")+ "//sendOrder"))
            {
                body = reader.ReadToEnd();
            }
            body = body.Replace("{header}", header);
            body = body.Replace("{date}", date);
            body = body.Replace("{paymant}", paymant);
            return body;
        }

        public static void SendHtmlFormattedEmail(string subject, string body,string email)
        {
            using (MailMessage mailMessage = new MailMessage())
            {   
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");
                mail.From = new MailAddress("shiran79999@gmail.com");
                mail.To.Add(email);
                mail.Subject = "Test Mail";
                mailMessage.Body = body;
                mailMessage.IsBodyHtml = true;
                SmtpServer.Port = 587;
                SmtpServer.Credentials = new System.Net.NetworkCredential("shiran79999@gmail.com", "ssss3188");
                SmtpServer.EnableSsl = true;
                SmtpServer.Send(mail);
            }
        }   
    }
}