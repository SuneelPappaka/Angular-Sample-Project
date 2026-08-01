using System.ComponentModel.DataAnnotations;

namespace HostelManagementAPI.Models
{
    public class Hostel
    {
        [Key]
        public int HostelId { get; set; }

        public string HostelName { get; set; }

        public string HostelType { get; set; }

        public string Address { get; set; }

        public int TotalRooms { get; set; }

        public int? WardenId { get; set; }
    }
}
