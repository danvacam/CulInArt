namespace Com.Apphb.Cia.Presentation.Models
{
    public class Course
    {
        public int UserId { get; set; }
        public string Description { get; set; }
        public CourseType CourseType { get; set; }
    }

    public enum CourseType
    {
        Starter,
        First,
        Second,
        Dessert,
        DrinkOne,
        DrinkTwo
    }
}
