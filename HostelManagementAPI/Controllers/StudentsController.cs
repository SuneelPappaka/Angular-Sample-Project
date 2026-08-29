using HostelManagementAPI.Data;
using HostelManagementAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HostelManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly AppDbContext _AppDbContext;
        public StudentsController(AppDbContext appDbContext)
        {
            _AppDbContext = appDbContext;
        }
        [HttpGet]
        public IActionResult GetAllStudents()
        {
            List<Students> s = _AppDbContext.Students.ToList();
            return Ok(s);
        }
        [HttpPost("CreateStudents")]
        public async Task<IActionResult> CreateStudents(Students students )
        {
            try
            {
                _AppDbContext.Students.Add(students);
                await _AppDbContext.SaveChangesAsync();
                return Ok(new
                {
                    message = "Student Created Successfull"
                });
            }catch(Exception ex)
            {
                return Ok(new
                {
                    message = ex.Message
                });
            }
            
        }

    }
}
