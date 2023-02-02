namespace RaiseNow.Models
{
    public class Campagin
    {
        public string campaignaddress { get; set; }
        public string category { get; set; }
        public string descriptionhash { get; set; }
        public string imghash { get; set; }
        public string amountrequired { get; set; }
        public string owner { get; set; }
        public string publisheddate { get; set; }
        public string title { get; set; }
        public string email { get; set; }
        public override string? ToString()
        {
            return "title: {" + title + "} descriptionhash: {" + descriptionhash + "} imghash: {" + imghash + "}";
        }
    }
}
