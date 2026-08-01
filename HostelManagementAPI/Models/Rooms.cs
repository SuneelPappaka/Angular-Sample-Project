using System.ComponentModel.DataAnnotations;

namespace HostelManagementAPI.Models
{
    public class Rooms
    {
        [Key]
        public int RoomId { get; set; }

        [Required]
        public string RoomNumber { get; set; }

        public string BlockName { get; set; }

        public int FloorNo { get; set; }

        public string RoomType { get; set; }

        public int Capacity { get; set; }

        public int Occupied { get; set; }

        public decimal MonthlyFee { get; set; }

        public string Status { get; set; }

        public ICollection<Students> Students { get; set; }
    }
}
