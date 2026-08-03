using HostelManagementAPI.Data;
using HostelManagementAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net.Sockets;

namespace HostelManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly AppDbContext _AppDbContext;
        public LoginController(AppDbContext appDbContext)
        {
            _AppDbContext = appDbContext;
        }

        [HttpPost("SignUp")]
        public async Task<IActionResult> SignUp(SignUp Userdata)
        {
            _AppDbContext.SignUp.Add(Userdata);
            await _AppDbContext.SaveChangesAsync();
            //_AppDbContext.Users.
            return Ok(new
            {
                message = "Login Check Successful"
            });
        }
        [HttpPost("LoginCheck")]
        public async Task<IActionResult> LoginCheck(Login userData)
        {
            var user = await _AppDbContext.SignUp
                .FirstOrDefaultAsync(u =>
                    u.Email == userData.Email &&
                    u.Password == userData.Password);

            if (user == null)
            {
                return Unauthorized(new
                {
                    message = "Invalid email or password"
                });
            }

            return Ok(new
            {
                message = "Login Successful",
                user = new
                {
                    user.Id,
                    user.Username,
                    user.Email,
                    user.Role
                }
            });
        }



    }
}
