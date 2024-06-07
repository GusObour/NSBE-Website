import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LeadershipAdmin = () => {
    const [leaders, setLeaders] = useState([]);
    const [newLeader, setNewLeader] = useState({ firstName: '', lastName: '', email: '', phoneNumber: '', position: '', image: '' });
    const [editingLeader, setEditingLeader] = useState(null);

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
        if (editingLeader) {
            await axios.put(`http://localhost:5000/leadership/${editingLeader._id}`, newLeader, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setEditingLeader(null);
        } else {
            await axios.post('http://localhost:5000/leadership', newLeader, {
                headers: { Authorization: `Bearer ${token}` },
            });
        }
        fetchLeaders();
        setNewLeader({ firstName: '', lastName: '', email: '', phoneNumber: '', position: '', image: '' });
    };

    const handleDelete = async (id) => {
        const token = localStorage.getItem('token');
        await axios.delete(`http://localhost:5000/leadership/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        fetchLeaders();
    };

    const handleEdit = (leader) => {
        setNewLeader({
            firstName: leader.user.firstName || '',
            lastName: leader.user.lastName || '',
            email: leader.user.email || '',
            phoneNumber: leader.user.phoneNumber || '',
            position: leader.position || '',
            image: leader.image || '',
        });
        setEditingLeader(leader);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Leadership</h2>
            <form onSubmit={handleSubmit} className="mb-4 flex flex-col sm:flex-row flex-wrap">
                <input
                    type="text"
                    name="firstName"
                    value={newLeader.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="border p-2 mr-2 mb-2 sm:mb-0 flex-1"
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    value={newLeader.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="border p-2 mr-2 mb-2 sm:mb-0 flex-1"
                    required
                />
                <input
                    type='text'
                    name='email'
                    value={newLeader.email}
                    onChange={handleInputChange}
                    placeholder='Email'
                    className="border p-2 mr-2 mb-2 sm:mb-0 flex-1"
                    required
                />
                <input
                    type='text'
                    name='phoneNumber'
                    value={newLeader.phoneNumber}
                    onChange={handleInputChange}
                    placeholder='Phone Number'
                    className="border p-2 mr-2 mb-2 sm:mb-0 flex-1"
                    required
                />
                <input
                    type="text"
                    name="position"
                    value={newLeader.position}
                    onChange={handleInputChange}
                    placeholder="Position"
                    className="border p-2 mr-2 mb-2 sm:mb-0 flex-1"
                    required
                />
                <input
                    type="text"
                    name="image"
                    value={newLeader.image}
                    onChange={handleInputChange}
                    placeholder="Image URL"
                    className="border p-2 mr-2 mb-2 sm:mb-0 flex-1"
                    required
                />
                <button type="submit" className="bg-purple text-white p-2 rounded">
                    {editingLeader ? 'Update Leader' : 'Add Leader'}
                </button>
            </form>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {leaders.map((leader) => (
                    <div key={leader._id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between">
                        <div>
                            <img src={leader.image} alt={`${leader.user.firstName} ${leader.user.lastName}`} className="h-32 w-full object-cover rounded-md mb-4" />
                            <h3 className="text-xl font-bold mb-2">{leader.user.firstName} {leader.user.lastName}</h3>
                            <p>Position: {leader.position}</p>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button onClick={() => handleEdit(leader)} className="bg-purple text-white p-2 rounded mr-2 hover:bg-off-white">Edit</button>
                            <button onClick={() => handleDelete(leader._id)} className="bg-red-500 text-white p-2 rounded hover:bg-red-700">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeadershipAdmin;
