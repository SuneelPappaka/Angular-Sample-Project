using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HostelManagementAPI.Models
{
    public class RoomAllocation
    {
        [Key]
        public int AllocationId { get; set; }

        public int StudentId { get; set; }

        public int RoomId { get; set; }

        public DateTime AllocatedDate { get; set; }

        public DateTime? VacatedDate { get; set; }

        public string Status { get; set; }

        [ForeignKey("StudentId")]
        public Students Student { get; set; }

        [ForeignKey("RoomId")]
        public Rooms Room { get; set; }
    }
}
