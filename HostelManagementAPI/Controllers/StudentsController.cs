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
                if (students.StudentId > 0)
                {
                    var studentData = await _AppDbContext.Students.FindAsync(students.StudentId);

                    if (studentData == null)
                    {
                        return NotFound(new
                        {
                            message = "Student not found"
                        });
                    }

                    studentData.AdmissionDate = students.AdmissionDate;
                    studentData.FirstName = students.FirstName;

                    studentData.LastName = students.LastName;

                    studentData.Gender = students.Gender;

                    studentData.DateOfBirth = students.DateOfBirth;

                    studentData.Mobile = students.Mobile;

                    studentData.Email = students.Email;

                    studentData.Address = students.Address;

                    studentData.Course = students.Course;

                    studentData.YearOfStudy = students.YearOfStudy;
                    studentData.AdmissionDate = students.AdmissionDate;

                    studentData.RoomId = students.RoomId;

                    studentData.Status = students.Status;

        await _AppDbContext.SaveChangesAsync();

                    return Ok(new
                    {
                        message = "Student Updated Successfully"
                    });

                }
                else
                {
                    _AppDbContext.Students.Add(students);
                    await _AppDbContext.SaveChangesAsync();
                    return Ok(new
                    {
                        message = "Student Created Successfull"
                    });
                }

              
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
