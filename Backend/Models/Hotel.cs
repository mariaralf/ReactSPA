using System;
using System.Collections.Generic;

namespace Backend
{
    public partial class Hotel
    {
        public Hotel()
        {
            Bookings = new HashSet<Booking>();
        }

        public int HotelId { get; set; }
        public string? HotelName { get; set; }
        public string? HotelImage { get; set; }
        public string? HotelDesc { get; set; }
        public int? HotelNightPrice { get; set; }

        public virtual ICollection<Booking> Bookings { get; set; }
    }
}
