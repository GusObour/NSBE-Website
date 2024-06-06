import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [user, setUser] = useState({ username: '', password: '', phoneNumber: '', isLeader: false });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser({ ...user, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/auth/register', user);
      navigate('/login');
    } catch (error) {
      setError('Error registering user');
    }
  };

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Register</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Leader</label>
          <input
            type="checkbox"
            name="isLeader"
            checked={user.isLeader}
            onChange={handleInputChange}
            className="mr-2"
          />
          <span>Yes</span>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-purple text-white p-2 w-full rounded">Register</button>
        <p className="text-center mt-4">
          Already have an account? <a href="/login" className="text-purple-500">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
