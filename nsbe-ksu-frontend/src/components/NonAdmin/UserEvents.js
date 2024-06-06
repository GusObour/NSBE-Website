import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

const UserEvents = () => {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/events/user', { withCredentials: true });
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching user events', error);
      }
    };

    fetchEvents();
  }, [user]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">My Events</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map(event => (
          <div key={event._id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-700">{event.description}</p>
            <p className="text-gray-700"><strong>Date:</strong> {event.date}</p>
            <p className="text-gray-700"><strong>Time:</strong> {event.time}</p>
            <p className="text-gray-700"><strong>Location:</strong> {event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserEvents;
