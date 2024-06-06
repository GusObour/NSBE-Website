import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SponsorsAdmin = () => {
  const [sponsors, setSponsors] = useState([]);
  const [newSponsor, setNewSponsor] = useState({ name: '', image: '' });

  useEffect(() => {
    fetchSponsors();
  }, []);

  const fetchSponsors = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:5000/sponsors', {
      headers: { Authorization: `Bearer ${token}` },
    });
    setSponsors(response.data);
  };

  const handleInputChange = (e) => {
    setNewSponsor({ ...newSponsor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.post('http://localhost:5000/sponsors', newSponsor, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchSponsors();
    setNewSponsor({ name: '', image: '' });
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    await axios.delete(`http://localhost:5000/sponsors/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchSponsors();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sponsors</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="name"
          value={newSponsor.name}
          onChange={handleInputChange}
          placeholder="Sponsor Name"
          className="border p-2 mr-2"
          required
        />
        <input
          type="text"
          name="image"
          value={newSponsor.image}
          onChange={handleInputChange}
          placeholder="Image URL"
          className="border p-2 mr-2"
          required
        />
        <button type="submit" className="bg-purple text-white p-2 rounded">Add Sponsor</button>
      </form>
      <ul>
        {sponsors.map((sponsor) => (
          <li key={sponsor._id} className="mb-2 flex justify-between">
            {sponsor.name}
            <button onClick={() => handleDelete(sponsor._id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SponsorsAdmin;
