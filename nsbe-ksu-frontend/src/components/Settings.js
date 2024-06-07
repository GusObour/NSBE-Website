import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Settings = () => {
  const { auth, setUser } = useContext(AuthContext);
  const [firstName, setFirstName] = useState(auth.user?.firstName || '');
  const [lastName, setLastName] = useState(auth.user?.lastName || '');
  const [email, setEmail] = useState(auth.user?.email || '');
  const [username, setUsername] = useState(auth.user?.username || '');
  const [phoneNumber, setPhoneNumber] = useState(auth.user?.phoneNumber || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdateProfile = async () => {
    try {
      const response = await axios.put('/auth/updateProfile', {
        firstName,
        lastName,
        email,
        username,
        phoneNumber,
      }, { withCredentials: true });
      setUser(response.data);
      setMessage('Profile updated successfully');
    } catch (error) {
      setMessage('Error updating profile');
    }
  };

  const handleChangePassword = async () => {
    try {
      await axios.put('/auth/changePassword', {
        currentPassword,
        newPassword,
      }, { withCredentials: true });
      setMessage('Password changed successfully');
    } catch (error) {
      setMessage('Error changing password');
    }
  };

  return (
    <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      {message && <div className="mb-4 text-green-600">{message}</div>}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Phone Number</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <button
        onClick={handleUpdateProfile}
        className="bg-purple text-white py-2 px-4 rounded-lg hover:bg-purple-700 w-full md:w-auto"
      >
        Update Profile
      </button>
      <div className="mt-8 mb-6">
        <label className="block text-gray-700 mb-2">Current Password</label>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">New Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <button
        onClick={handleChangePassword}
        className="bg-purple text-white py-2 px-4 rounded-lg hover:bg-purple-700 w-full md:w-auto"
      >
        Change Password
      </button>
    </div>
  );
};

export default Settings;
