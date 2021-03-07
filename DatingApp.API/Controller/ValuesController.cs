using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace DatingApp.API.Controller
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController:ControllerBase
    {
        private readonly IConfiguration _config;
        public ValuesController(IConfiguration config)
        {
            _config = config;
        }

        public IActionResult GetData(){
            var values = new JsonResult(_config.GetConnectionString("DatabaseConnection"));
            return Ok(values);
        }
    }
}