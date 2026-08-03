using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HostelManagementAPI.Migrations
{
    /// <inheritdoc />
    public partial class emailaddedinsignup : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "SignUp",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "SignUp");
        }
    }
}
