using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Com.Apphb.Cia.Presentation.Models
{
    [Table("Calendar")]
    public class Calendar : Entity
    {
        public DateTime DateTime { get; set; }
        public string Place { get; set; }
        public bool IsOfficial { get; set; }
        public IEnumerable<Course> Courses { get; set; }
    }
}
