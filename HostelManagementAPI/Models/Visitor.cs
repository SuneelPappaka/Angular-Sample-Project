using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HostelManagementAPI.Models
{
    public class Visitor
    {
        [Key]
        public int VisitorId { get; set; }

        public int StudentId { get; set; }

        public string VisitorName { get; set; }

        public string Relation { get; set; }

        public string Mobile { get; set; }

        public DateTime VisitDate { get; set; }

        public TimeSpan CheckIn { get; set; }

        public TimeSpan? CheckOut { get; set; }

        [ForeignKey("StudentId")]
        public Students Student { get; set; }
    }
}
