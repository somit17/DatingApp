using System.Security.AccessControl;
using System;
namespace DatingApp.API.Models
{
    public class Photo
    {
        public long ID { get; set; }
        public string URL { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public bool IsMain { get; set; }
        public User User { get; set; }
        public long UserID { get; set; }
    }
}