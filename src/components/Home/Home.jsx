import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router'; 
import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/events.json')
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.error('Error loading events:', err));
  }, []);

  return (
    <div className="space-y-10 px-4 py-6">
      
      {/* === Slider Section === */}
      <div>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          className="rounded-lg"
        >
          {events.slice(0, 3).map(event => (
            <SwiperSlide key={event.id}>
              <div className="relative">
                <img src={event.thumbnail} className="w-full object-cover h-[400px] rounded-lg" alt={event.name} />
                <div className="absolute bottom-0 bg-black bg-opacity-50 w-full p-4 text-white">
                  <h2 className="text-xl font-bold">{event.name}</h2>
                  <p>{event.date} • {event.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* === Upcoming Events Section === */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map(event => (
            <div key={event.id} className="card bg-base-100 shadow-xl">
              <figure><img src={event.thumbnail} alt={event.name} className="h-48 w-full object-cover" /></figure>
              <div className="card-body">
                <h3 className="card-title">{event.name}</h3>
                <p className="text-sm">{event.category} • {event.date}</p>
                <p className="text-sm">{event.location}</p>
                <p className="font-semibold">Entry Fee: ৳{event.entry_fee}</p>
                <div className="card-actions justify-end">
                  {/* ✅ Corrected View More link */}
                  <Link to={`/events/${event.id}`} className="btn btn-primary btn-sm">View More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === Popular Categories Section === */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Popular Categories</h2>
        <div className="flex flex-wrap gap-3">
          {[...new Set(events.map(e => e.category))].map((cat, i) => (
            <div key={i} className="badge badge-lg badge-outline text-lg">{cat}</div>
          ))}
        </div>
      </div>

      {/* === Featured Location Section === */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Featured Location: Cox’s Bazar</h2>
        <div className="bg-base-200 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center">
          <img src="https://i.ibb.co.com/VYc65MTB/dc.jpg" className="w-full md:w-1/2 h-64 object-cover rounded-lg" alt="Cox’s Bazar" />
          <div className="md:ml-6 mt-4 md:mt-0">
            <h3 className="text-xl font-bold">Bangladesh Food Carnival</h3>
            <p className="mt-2">Enjoy a massive food fair at the beautiful beachside of Cox’s Bazar.</p>
            {/* ❌ You used event.id here outside a loop – so replaced with a default one */}
            <Link to={`/events/1`} className="btn btn-primary btn-sm mt-3">View More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
