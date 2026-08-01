using HostelManagementAPI.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Net.Sockets;

namespace HostelManagementAPI.Data
{
    public class AppDbContext: IdentityDbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) 
        {
            
        }
        public DbSet<Warden> Warden { get; set; }
        public DbSet<Login> Login { get; set; }
        public DbSet<Attendance> Attendance { get; set; }
        public DbSet<Complaints> Complaints { get; set; }
        public DbSet<Fees> Fees { get; set; }
        public DbSet<Hostel> Hostel { get; set; }
        public DbSet<LeaveRequest> LeaveRequest { get; set; }
       

        public DbSet<RoomAllocation> RoomAllocation { get; set; }
        public DbSet<Rooms> Rooms { get; set; }
        public DbSet<Students> Students { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<Visitor> Visitor { get; set; }
       


    }
}
