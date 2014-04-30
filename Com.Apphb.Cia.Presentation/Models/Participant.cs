namespace Com.Apphb.Cia.Presentation.Models
{
    public class Participant : Entity
    {
        public int UserId { get; set; }
        public string AvatarUrl { get; set; }
        public string Description { get; set; }
    }
}
