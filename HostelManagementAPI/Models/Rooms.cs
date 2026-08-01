namespace HostelManagementAPI.Models
{
    public class Rooms
    {
        public int id { get; set; }
        public int roomNumber{ get; set; }
        public string roomType { get; set; }
        public int capacity { get; set; }
        public int occupied{get; set; }
        public int floor { get; set; }
        public string status { get; set; }
    }
}
