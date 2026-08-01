namespace HostelManagementAPI.Models
{
    public class Complaints
    {
        public int id { get; set; }
        public int studentId{ get; set; }
        public string  title{ get; set; }
        public string    description{ get; set; }
        public DateTime  complaintDate{ get; set; }
        public string  status{ get; set; }
    }
}
