using System.ComponentModel.DataAnnotations;

namespace HostelManagementAPI.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }

        public string Role { get; set; }

        public int? StudentId { get; set; }

        public int? WardenId { get; set; }
    }
}
