import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, Link, Routes, Route } from 'react-router-dom';
import SponsorsAdmin from './Admin/SponsorsAdmin';
import LeadershipAdmin from './Admin/LeadershipAdmin'; // Assuming you have a LeadershipAdmin component
import EventsAdmin from './Admin/EventsAdmin'; // Assuming you have an EventsAdmin component
import Profile from './Profile'; // Assuming you have a Profile component
import Settings from './Settings'; // Assuming you have a Settings component

const AdminDashboard = () => {
    const { auth, logout } = useContext(AuthContext);
  
    if (!auth.user || !auth.user.isLeader) {
      return <Navigate to="/login" />;
    }
  
    return (
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-64 bg-purple text-white flex flex-col">
          <div className="p-4 text-2xl font-bold">
            <p>Hello {auth.user.username}</p>
          </div>
          <nav className="mt-4 flex-1">
            <ul>
              <li>
                <Link to="/admin/sponsors" className="block py-2.5 px-4 hover:bg-purple-700">Sponsors</Link>
              </li>
              <li>
                <Link to="/admin/leadership" className="block py-2.5 px-4 hover:bg-purple-700">Leadership</Link>
              </li>
              <li>
                <Link to="/admin/events" className="block py-2.5 px-4 hover:bg-purple-700">Events</Link>
              </li>
              <li>
                <Link to="/admin/profile" className="block py-2.5 px-4 hover:bg-purple-700">Profile</Link>
              </li>
              <li>
                <Link to="/admin/settings" className="block py-2.5 px-4 hover:bg-purple-700">Settings</Link>
              </li>
            </ul>
          </nav>
          <div className="p-4">
            <button onClick={logout} className="block w-full py-2.5 px-4 bg-red-600 hover:bg-red-700">Logout</button>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="flex-1 p-6">
          <Routes>
            <Route path="sponsors" element={<SponsorsAdmin />} />
            <Route path="leadership" element={<LeadershipAdmin />} />
            <Route path="events" element={<EventsAdmin />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    );
  };
  
  export default AdminDashboard;
