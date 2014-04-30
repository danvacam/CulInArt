using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Com.Apphb.Cia.Presentation.Models;

namespace Com.Apphb.Cia.Presentation.Controllers
{
    public class CalendarController : ApiController
    {
        private readonly Calendar[] _datesCalendar =
        {
            new Calendar
            {
                DateTime = new DateTime(2013, 10, 5),
                Id = 1,
                IsOfficial = true,
                Place = "Casa dani",
                Courses = new List<Course>
                {
                    new Course {CourseType = CourseType.Starter, UserId = 1, Description = "Antipasto"},
                    new Course {CourseType = CourseType.First, UserId = 2, Description = "Primo"},
                    new Course {CourseType = CourseType.Second, UserId = 3, Description = "Secondo"},
                    new Course {CourseType = CourseType.Dessert, UserId = 4, Description = "Dolce"},
                    new Course {CourseType = CourseType.DrinkOne, UserId = 5, Description = "Bere 1"},
                    new Course {CourseType = CourseType.DrinkTwo, UserId = 6, Description = "Bere 2"}
                }
            },
            new Calendar
            {
                DateTime = new DateTime(2013, 12, 6),
                Id = 2,
                IsOfficial = true,
                Place = "Casa Phil",
                Courses = new List<Course>
                {
                    new Course {CourseType = CourseType.Starter, UserId = 1, Description = "Antipasto"},
                    new Course {CourseType = CourseType.First, UserId = 2, Description = "Primo"},
                    new Course {CourseType = CourseType.Second, UserId = 3, Description = "Secondo"},
                    new Course {CourseType = CourseType.Dessert, UserId = 4, Description = "Dolce"},
                    new Course {CourseType = CourseType.DrinkOne, UserId = 5, Description = "Bere 1"},
                    new Course {CourseType = CourseType.DrinkTwo, UserId = 6, Description = "Bere 2"}
                }
            }
        };

        public IEnumerable<Calendar> GetAllDates()
        {
            return _datesCalendar;
        }

        public IHttpActionResult GetDate(int id)
        {
            var date = _datesCalendar.FirstOrDefault(p => p.Id == id);
            if (date == null)
                return NotFound();
            return Ok(date);
        }

    }
}
