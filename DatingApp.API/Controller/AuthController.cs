using System;
using System.Text;
using System.Security.Claims;
using DatingApp.API.Context.IRepository;
using Microsoft.AspNetCore.Mvc;
using DatingApp.API.Models;
using System.Threading.Tasks;
using DatingApp.API.Dtos;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;

namespace DatingApp.API.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;
        public AuthController(IAuthRepository repo, IConfiguration config)
        {
            _repo = repo;
            _config = config;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto registerUser)
        {
            registerUser.UserName = registerUser.UserName.ToLower();
            if (await _repo.UserExists(registerUser.UserName))
            {
                return BadRequest("Username already exists");
            }

            var userToCreate = new User
            {
                Username = registerUser.UserName
            };
            var createdUser = await _repo.Register(userToCreate, registerUser.Password);
            return StatusCode(201);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserForLoginDto userForLoginDto)
        {
            var userFromRepo = await _repo.Login(userForLoginDto.UserName, userForLoginDto.Password);
            if (userFromRepo == null)
                return Unauthorized();

                var claims =  new []{
                    new Claim(ClaimTypes.NameIdentifier,userFromRepo.UserID.ToString()),
                    new Claim(ClaimTypes.Name,userFromRepo.Username)
                };

                var key  = new SymmetricSecurityKey(Encoding.UTF8.
                GetBytes(_config.GetSection("AppSettings:Token").Value));

                var creds =  new SigningCredentials(key,SecurityAlgorithms.HmacSha512Signature);

                var tokenDescriptor =  new SecurityTokenDescriptor{
                    Subject = new ClaimsIdentity(claims),
                    Expires = DateTime.Now.AddDays(1),
                    SigningCredentials  = creds
                };

                var tokenHandler = new JwtSecurityTokenHandler();
                var token = tokenHandler.CreateToken(tokenDescriptor);
                return Ok(new {
                    token= tokenHandler.WriteToken(token)
                });
        }
    }
}