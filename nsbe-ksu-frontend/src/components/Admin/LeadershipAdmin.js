import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LeadershipAdmin = () => {
  const [leaders, setLeaders] = useState([]);
  const [newLeader, setNewLeader] = useState({ name: '', position: '', image: '' });

  useEffect(() => {
    fetchLeaders();
  }, []);

  const fetchLeaders = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:5000/leadership', {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data);
    setLeaders(response.data);
  };

  const handleInputChange = (e) => {
    setNewLeader({ ...newLeader, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.post('http://localhost:5000/leadership', newLeader, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchLeaders();
    setNewLeader({ name: '', position: '', image: '' });
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    await axios.delete(`http://localhost:5000/leadership/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchLeaders();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Leadership</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="name"
          value={newLeader.name}
          onChange={handleInputChange}
          placeholder="Leader Name"
          className="border p-2 mr-2"
          required
        />
        <input
          type="text"
          name="position"
          value={newLeader.position}
          onChange={handleInputChange}
          placeholder="Position"
          className="border p-2 mr-2"
          required
        />
        <input
          type="text"
          name="image"
          value={newLeader.image}
          onChange={handleInputChange}
          placeholder="Image URL"
          className="border p-2 mr-2"
          required
        />
        <button type="submit" className="bg-purple text-white p-2 rounded">Add Leader</button>
      </form>
      <ul>
        {leaders.map((leader) => (
          <li key={leader._id} className="mb-2 flex justify-between">
            {leader.user.username} - {leader.position}
            <button onClick={() => handleDelete(leader._id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeadershipAdmin;
