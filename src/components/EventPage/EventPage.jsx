import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const EventPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/events.json')
      .then(res => res.json())
      .then(data => {
        const selected = data.find(ev => ev.id === id);
        setEvent(selected);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const reservation = {
      eventId: event.id,
      eventName: event.name,
      date: event.date,
      location: event.location,
      entryFee: event.entry_fee,
      userName: formData.name,
      userEmail: formData.email,
    };

    // Save to localStorage (append to array)
    const existing = JSON.parse(localStorage.getItem('reservations')) || [];
    localStorage.setItem('reservations', JSON.stringify([...existing, reservation]));

    setMessage(`✅ Seat reserved for ${formData.name}`);
    setFormData({ name: '', email: '' });
  };

  if (!event) return <p className="text-center">Loading event...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <img src={event.thumbnail} alt={event.name} className="w-full h-80 object-cover rounded" />
      <h1 className="text-3xl font-bold">{event.name}</h1>
      <p className="text-lg">{event.description}</p>
      <p><strong>Category:</strong> {event.category}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Entry Fee:</strong> ৳{event.entry_fee}</p>

      <div className="mt-8 p-4 bg-base-200 rounded">
        <h2 className="text-xl font-semibold mb-2">Reserve Your Seat</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <button type="submit" className="btn btn-primary">Reserve Seat</button>
        </form>
        {message && <p className="mt-3 text-green-600">{message}</p>}
      </div>
    </div>
  );
};

export default EventPage;
