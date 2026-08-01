using System.ComponentModel.DataAnnotations;

namespace HostelManagementAPI.Models
{
    public class Warden
    {
        [Key]
        public int WardenId { get; set; }

        public string Name { get; set; }

        public string Mobile { get; set; }

        public string Email { get; set; }

        public string Address { get; set; }
    }
}
