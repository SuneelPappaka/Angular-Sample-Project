using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace HostelManagementAPI.Models
{
    public class Fees
    {
        [Key]
        public int FeeId { get; set; }

        public int StudentId { get; set; }

        public decimal Amount { get; set; }

        public DateTime DueDate { get; set; }

        public DateTime? PaidDate { get; set; }

        public string PaymentMode { get; set; }

        public string Status { get; set; }

        [ForeignKey("StudentId")]
        public Students Student { get; set; }
    }
}
