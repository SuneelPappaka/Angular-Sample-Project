using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HostelManagementAPI.Models
{
    public class Students
    {
        [Key]
        public int StudentId { get; set; }

        [Required]
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Gender { get; set; }

        public DateTime DateOfBirth { get; set; }

        public string Mobile { get; set; }

        public string Email { get; set; }

        public string Address { get; set; }

        public string Course { get; set; }

        public int YearOfStudy { get; set; }

        public DateTime AdmissionDate { get; set; }

        public int? RoomId { get; set; }

        public string Status { get; set; }

        [ForeignKey("RoomId")]
        public Rooms Rooms { get; set; }

    }
}