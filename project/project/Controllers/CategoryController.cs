using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace project.Controllers
{
    [RoutePrefix("api/category")]
    public class CategoryController : ApiController
    {

        [HttpGet]
        [Route("getAllCategories")]
        public List<DTO.Category> GetAllCategories()
        {
            return BLL.CategoryLogic.GetAllCategories();
        }


        [HttpGet]
        //קבלת קטגוריה לפי id
        [Route("getCategoryById/{categoryId}")]
        public DTO.Category GetCategoryById(int categoryId)
        {
            return BLL.CategoryLogic.GetCategoryById(categoryId);
        }
    }
}
