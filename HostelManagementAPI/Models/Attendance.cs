using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HostelManagementAPI.Models
{
    public class Attendance
    {
        [Key]
        public int AttendanceId { get; set; }

        public int StudentId { get; set; }

        public DateTime AttendanceDate { get; set; }

        public string Status { get; set; }

        public string Remarks { get; set; }

        [ForeignKey("StudentId")]
        public Students Student { get; set; }
    }
}
