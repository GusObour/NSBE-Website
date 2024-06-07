import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SponsorsAdmin = () => {
  const [sponsors, setSponsors] = useState([]);
  const [newSponsor, setNewSponsor] = useState({ name: '', image: '' });
  const [editingSponsor, setEditingSponsor] = useState(null);

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
    if (editingSponsor) {
      await axios.put(`http://localhost:5000/sponsors/${editingSponsor._id}`, newSponsor, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEditingSponsor(null);
    } else {
      await axios.post('http://localhost:5000/sponsors', newSponsor, {
        headers: { Authorization: `Bearer ${token}` },
      });
    }
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

  const handleEdit = (sponsor) => {
    setNewSponsor(sponsor);
    setEditingSponsor(sponsor);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sponsors</h2>
      <form onSubmit={handleSubmit} className="mb-4 flex flex-col sm:flex-row">
        <input
          type="text"
          name="name"
          value={newSponsor.name}
          onChange={handleInputChange}
          placeholder="Sponsor Name"
          className="border p-2 mr-2 mb-2 sm:mb-0"
          required
        />
        <input
          type="text"
          name="image"
          value={newSponsor.image}
          onChange={handleInputChange}
          placeholder="Image URL"
          className="border p-2 mr-2 mb-2 sm:mb-0"
          required
        />
        <button type="submit" className="bg-purple text-white p-2 rounded">
          {editingSponsor ? 'Update Sponsor' : 'Add Sponsor'}
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sponsors.map((sponsor) => (
          <div key={sponsor._id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between">
            <div>
              <img src={sponsor.image} alt={sponsor.name} className="h-32 w-full object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold mb-2">{sponsor.name}</h3>
            </div>
            <div className="flex justify-between">
              <button onClick={() => handleEdit(sponsor)} className="bg-purple text-white p-2 rounded mr-2 hover:bg-off-white">Edit</button>
              <button onClick={() => handleDelete(sponsor._id)} className="bg-red-500 text-white p-2 rounded hover:bg-red-700">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsAdmin;
