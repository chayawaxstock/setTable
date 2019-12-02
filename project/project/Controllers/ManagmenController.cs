using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace project.Controllers
{
    [RoutePrefix("api/Managmen")]
    [EnableCors("*", "*", "*")]

    public class ManagmenController : ApiController
    {
        const string nameManagmen = "setable";
        const string password = "1513";

        [HttpGet]
        [Route("validationManeger/{name}/{pass}")]
        #region פונקציה שבודקת האם השם והסיסמא של המנהל תקינים
        public bool CheckIntegrityManagmen(string name, string pass)
        {
            if (name == nameManagmen && pass == password)
                return true;
            return false;
        }
        #endregion

        [HttpPost]
        [Route("addProduct")]
        #region הוספת מוצר
        public async System.Threading.Tasks.Task<bool> AddProductAsync()
        {
            if (!Request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }
            string root = HttpContext.Current.Server.MapPath("~/App_Data");
            var provider = new MultipartFormDataStreamProvider(root);
            try
            {
                await Request.Content.ReadAsMultipartAsync(provider);
                NameValueCollection formdata = provider.FormData;
                ///כל האוביקט שנשלח
                DTO.Product pp = JsonConvert.DeserializeObject<DTO.Product>(formdata["res"].ToString());
                foreach (MultipartFileData file in provider.FileData)
                {
                    var fileName = file.Headers.ContentDisposition.FileName.Replace("\"", string.Empty);
                    byte[] documentData = File.ReadAllBytes(file.LocalFileName);
                    string path = HttpContext.Current.Server.MapPath("~/File");
                    if (Directory.GetFiles(path, fileName).Length == 0)
                    {
                        string destFile = System.IO.Path.Combine(path, fileName);
                        pp.img = fileName;
                        BLL.ManegerLogic.AddProduct(pp);
                        ///destFile-ניתוב לשמירת התמונה אצלכם בפרויקט עצמו
                        File.Copy(file.LocalFileName, path + "//" + pp.img);

                        return true;
                    }
                }
                return true;
            }
            catch (System.Exception e)
            {
                return false;
            }
        }
        #endregion

        [HttpDelete]
        [Route("DeleteProduct/{id}")]
        public bool DeleteProduct(int id)
        {
            return BLL.ManegerLogic.DeleteProduct(id);
        }

        [Route("diagram")]
        public int[] getDiagram()
        {
            return BLL.ManegerLogic.getDiagram();
        }

    }
}