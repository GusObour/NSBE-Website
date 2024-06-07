import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventsAdmin = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', description: '', date: '', time: '', location: '', rsvpLink: '' });
  const [editingEvent, setEditingEvent] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(4); 

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
    if (editingEvent) {
      await axios.put(`http://localhost:5000/events/${editingEvent._id}`, newEvent, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEditingEvent(null);
    } else {
      await axios.post('http://localhost:5000/events', newEvent, {
        headers: { Authorization: `Bearer ${token}` },
      });
    }
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

  const handleEdit = (event) => {
    setNewEvent({
      title: event.title,
      description: event.description,
      date: event.date,
      time: event.time,
      location: event.location,
      rsvpLink: event.rsvpLink,
    });
    setEditingEvent(event);
  };

  // Get current events
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      <form onSubmit={handleSubmit} className="mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <input
          type="text"
          name="title"
          value={newEvent.title}
          onChange={handleInputChange}
          placeholder="Event Title"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="description"
          value={newEvent.description}
          onChange={handleInputChange}
          placeholder="Event Description"
          className="border p-2 rounded"
          required
        />
        <input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleInputChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="time"
          name="time"
          value={newEvent.time}
          onChange={handleInputChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="location"
          value={newEvent.location}
          onChange={handleInputChange}
          placeholder="Event Location"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="rsvpLink"
          value={newEvent.rsvpLink}
          onChange={handleInputChange}
          placeholder="RSVP Link"
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-purple text-white p-2 rounded">
          {editingEvent ? 'Update Event' : 'Add Event'}
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {currentEvents.map((event) => (
          <div key={event._id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-700">{event.description}</p>
              <p className="text-gray-500">{event.date} at {event.time}</p>
              <p className="text-gray-500">{event.location}</p>
              <a href={event.rsvpLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">RSVP Link</a>
            </div>
            <div className="flex justify-between mt-4">
              <button onClick={() => handleEdit(event)} className="bg-purple text-white p-2 rounded mr-2 hover:bg-off-white">Edit</button>
              <button onClick={() => handleDelete(event._id)} className="bg-red-500 text-white p-2 rounded hover:bg-red-700">Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <ul className="flex">
          {[...Array(Math.ceil(events.length / eventsPerPage)).keys()].map(number => (
            <li key={number + 1} className="mx-1">
              <button onClick={() => paginate(number + 1)} className="bg-purple text-white p-2 rounded">{number + 1}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventsAdmin;
