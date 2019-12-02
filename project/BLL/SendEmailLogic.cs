using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
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
            using (StreamReader reader = new StreamReader(@"C:\Users\מחשב\Desktop\project\BLL\sendOrder.html"))
            {
                body = reader.ReadToEnd();
            }
            body = body.Replace("{header}", header);
            body = body.Replace("{date}", date);
            body = body.Replace("{payment}", paymant);
            return body;
        }

        public static void SendHtmlFormattedEmail(string subject, string body,string email)
        {
            MailMessage mail = new MailMessage();
            mail.From = new System.Net.Mail.MailAddress("seTable111@gmail.com");
            SmtpClient smtp = new SmtpClient();
            smtp.Port = 587;
            smtp.EnableSsl = true;
            smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
            smtp.UseDefaultCredentials = false;
            smtp.Credentials = new NetworkCredential(mail.From.Address, "318879822set");
            smtp.Host = "smtp.gmail.com";
            //recipient
            mail.To.Add(new MailAddress(email));
            mail.IsBodyHtml = true;
            mail.Subject = subject;
            mail.Body = body;
            smtp.Send(mail);
        }   
    }
}