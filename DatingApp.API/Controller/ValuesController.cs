using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controller
{
    [Route("api/[controller]")]
    public class ValuesController:ControllerBase
    {
        public ValuesController()
        {
            
        }

        public IActionResult GetData(){
            var values = new JsonResult("ok");
            return Ok(values);
        }
    }
}