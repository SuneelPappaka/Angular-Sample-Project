using HostelManagementAPI.Data;
using HostelManagementAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
        //[HttpGet]
        //public IActionResult GetAllStudents()
        //{
        //    List<Students> s = _AppDbContext.Students.ToList();

        //    return Ok(s);
        //}
        [HttpGet]
        public IActionResult GetAllStudents(int pageNumber = 1, int pageSize = 10)
        {
            if (pageNumber < 1)
                pageNumber = 1;

            if (pageSize < 1)
                pageSize = 10;

            var query = _AppDbContext.Students.AsNoTracking();

            int totalCount = query.Count();

            var students = query
                .OrderBy(s => s.StudentId)
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            return Ok(new
            {
                data = students,
                totalCount = totalCount,
                pageNumber = pageNumber,
                pageSize = pageSize
            });
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
