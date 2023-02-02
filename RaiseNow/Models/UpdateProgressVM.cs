using System.ComponentModel.DataAnnotations;

namespace RaiseNow.Models
{
    public class UpdateProgressVM
    {
        [Required]
        public string Tittle { get; set; }
        [Required]
        public string Description { get; set; }
    }
}
