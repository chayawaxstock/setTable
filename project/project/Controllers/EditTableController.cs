using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace project.Controllers
{
    [RoutePrefix("api/editTable")]
    public class EditTableController : ApiController
    {
        [HttpGet]
        [Route("getPlates")]
        public List<DTO.Product> GetPlates()
        {
            return BLL.EditTableLogic.getPlate();
        }

        [HttpGet]
        [Route("GetPlatesBig")]
        public List<DTO.Product> GetPlatesBig()
        {
            return BLL.EditTableLogic.getPlateBig();
        }

        [HttpGet]
        [Route("GetGlass")]
        public List<DTO.Product> GetGlass()
        {
            return BLL.EditTableLogic.getGlass();
        }

        [HttpGet]
        [Route("getTable/{idPlate}/{idPlateBig}/{idGlass}")]
        public string getTable(int idPlate,int idPlateBig,int idGlass)
        {
            return BLL.EditTableLogic.getImageEditTable(idPlate,idPlateBig,idGlass);
        }

    }
}
