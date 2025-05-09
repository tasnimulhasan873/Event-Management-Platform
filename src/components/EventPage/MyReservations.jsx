import React, { useEffect, useState } from 'react';

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('reservations')) || [];
    setReservations(stored);
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-4">My Reservations</h2>

      {reservations.length === 0 ? (
        <p className="text-gray-600">You haven’t reserved any seats yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reservations.map((res, idx) => (
            <div key={idx} className="bg-base-200 p-4 rounded-md shadow">
              <h3 className="text-xl font-semibold mb-1">{res.eventName}</h3>
              <p><strong>Date:</strong> {res.date}</p>
              <p><strong>Location:</strong> {res.location}</p>
              <p><strong>Entry Fee:</strong> ৳{res.entryFee}</p>
              <hr className="my-2" />
              <p><strong>Reserved by:</strong> {res.userName} ({res.userEmail})</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReservations;
