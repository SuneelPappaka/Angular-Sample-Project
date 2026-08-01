using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HostelManagementAPI.Models
{
    public class Complaints
    {
        [Key]
        public int ComplaintId { get; set; }

        public int StudentId { get; set; }

        public string ComplaintText { get; set; }

        public DateTime ComplaintDate { get; set; }

        public string Status { get; set; }

        public DateTime? ResolvedDate { get; set; }

        [ForeignKey("StudentId")]
        public Students Student { get; set; }
    }
}
