using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace project.Controllers
{
    [RoutePrefix("api/Product")]
    [EnableCors("*", "*", "*")]
    public class ProductController : ApiController
    {
        [Route("getAllProduct")]
        public List<DTO.Product> GetAllProducts()
        {
            return BLL.ProductLogic.GetAllProduct();
        }

        [Route("getProductById/{productId}")]
        public DTO.Product GetProductById(int productId)
        {
            return BLL.ProductLogic.GetProductById(productId);
        }


        [HttpGet]
        [Route("getProductByIdCategory/{categoryId}")]

        public  List<DTO.Product> getProductByIdCategory(int categoryId)
        {
            return BLL.ProductLogic.GetProductsByIdCategory(categoryId);
        }


        [HttpPost]
        [Route("ValidQty")]
        public bool validQty(DTO.Product item)
        {
           return  BLL.ProductLogic.validQty(item);
        }
        [HttpGet]
        [Route("OrderByAmountOfDiners/{idPlate}/{idGlass}/{numberOfDiners}")]
        public List<int> orderByAmountOfDiners(int idPlate, int idGlass, int
     numberOfDiners)
        {
            return BLL.ProductLogic.orderByAmountOfDiners(idPlate,idGlass,numberOfDiners);
        }
        #region סינון לפי צורה
        [HttpGet]
        [Route("getProductByModel/{type}")]
        public List<DTO.Product> GetProductByModel(string type)
        {
            return BLL.ProductLogic.GetProductByModel(type);
        }
        #endregion
    }
}