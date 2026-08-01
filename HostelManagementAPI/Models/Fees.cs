using static System.Runtime.InteropServices.JavaScript.JSType;

namespace HostelManagementAPI.Models
{
    public class Fees
    {
        public int id{ get; set; }
        public int  studentId { get; set; }
        public decimal  amount{ get; set; }
        public DateTime  paymentDate{ get; set; }
        public DateTime dueDate{ get; set; }
        public string  paymentMethod{ get; set; }
        public string  status{ get; set; }
    }
}
