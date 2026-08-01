using System.ComponentModel.DataAnnotations;

namespace HostelManagementAPI.Models
{
    public class Login
    {
        [Key]
        public int LoginId { get; set; }
        public string username { get; set; }
        public string password { get; set; }
    }
}
