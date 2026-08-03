using System.ComponentModel.DataAnnotations;

namespace HostelManagementAPI.Models
{
    public class SignUp
    {
        public int Id { get; set; }
        public int UserId { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
        public string Email{get;set; }
        public string PhoneNumber { get; set; }

        public string Role { get; set; }

        public int? StudentId { get; set; }

        public int? WardenId { get; set; }
    }
}
