using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HostelManagementAPI.Migrations
{
    /// <inheritdoc />
    public partial class roomsclassremoved : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Students_Rooms_RoomId",
                table: "Students");

            migrationBuilder.DropTable(
                name: "Rooms");

            migrationBuilder.DropIndex(
                name: "IX_Students_RoomId",
                table: "Students");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Rooms",
                columns: table => new
                {
                    RoomId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BlockName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Capacity = table.Column<int>(type: "int", nullable: false),
                    FloorNo = table.Column<int>(type: "int", nullable: false),
                    MonthlyFee = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Occupied = table.Column<int>(type: "int", nullable: false),
                    RoomNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RoomType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rooms", x => x.RoomId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Students_RoomId",
                table: "Students",
                column: "RoomId");

            migrationBuilder.AddForeignKey(
                name: "FK_Students_Rooms_RoomId",
                table: "Students",
                column: "RoomId",
                principalTable: "Rooms",
                principalColumn: "RoomId");
        }
    }
}
