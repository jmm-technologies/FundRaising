namespace RaiseNow.Models
{
    public class EventVM
    {
        public string id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime updatedAt { get; set; }
        public Photoid photoId { get; set; }
    }

    public class Photoid
    {
        public string id { get; set; }
        public string path { get; set; }
    }
}
