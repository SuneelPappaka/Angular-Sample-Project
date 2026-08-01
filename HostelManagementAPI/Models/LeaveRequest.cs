using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HostelManagementAPI.Models
{
    public class LeaveRequest
    {
        [Key]
        public int LeaveId { get; set; }

        public int StudentId { get; set; }

        public DateTime FromDate { get; set; }

        public DateTime ToDate { get; set; }

        public string Reason { get; set; }

        public string Status { get; set; }

        public DateTime AppliedDate { get; set; }

        [ForeignKey("StudentId")]
        public Students Student { get; set; }
    }
}
