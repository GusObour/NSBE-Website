import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventsAdmin = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', description: '', date: '', time: '', location: '', rsvpLink: '' });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:5000/events', {
      headers: { Authorization: `Bearer ${token}` },
    });
    setEvents(response.data);
  };

  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.post('http://localhost:5000/events', newEvent, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchEvents();
    setNewEvent({ title: '', description: '', date: '', time: '', location: '', rsvpLink: '' });
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    await axios.delete(`http://localhost:5000/events/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchEvents();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="title"
          value={newEvent.title}
          onChange={handleInputChange}
          placeholder="Event Title"
          className="border p-2 mr-2"
          required
        />
        <input
          type="text"
          name="description"
          value={newEvent.description}
          onChange={handleInputChange}
          placeholder="Event Description"
          className="border p-2 mr-2"
          required
        />
        <input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleInputChange}
          className="border p-2 mr-2"
          required
        />
        <input
          type="time"
          name="time"
          value={newEvent.time}
          onChange={handleInputChange}
          className="border p-2 mr-2"
          required
        />
        <input
          type="text"
          name="location"
          value={newEvent.location}
          onChange={handleInputChange}
          placeholder="Event Location"
          className="border p-2 mr-2"
          required
        />
        <input
          type="text"
          name="rsvpLink"
          value={newEvent.rsvpLink}
          onChange={handleInputChange}
          placeholder="RSVP Link"
          className="border p-2 mr-2"
          required
        />
        <button type="submit" className="bg-purple text-white p-2 rounded">Add Event</button>
      </form>
      <ul>
        {events.map((event) => (
          <li key={event._id} className="mb-2 flex justify-between">
            {event.title}
            <button onClick={() => handleDelete(event._id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsAdmin;
