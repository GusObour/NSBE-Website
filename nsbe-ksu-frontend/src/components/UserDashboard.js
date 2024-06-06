import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-purple text-white flex flex-col">
        <div className="p-4 text-2xl font-bold">
          <Link to="/">KSU NSBE</Link>
        </div>
        <nav className="mt-4 flex-1">
          <ul>
            <li>
              <Link to="/user" className="block py-2.5 px-4 bg-purple-700">Dashboard</Link>
            </li>
            <li>
              <Link to="/user/events" className="block py-2.5 px-4 hover:bg-purple-700">My Events</Link>
            </li>
            <li>
              <Link to="/user/profile" className="block py-2.5 px-4 hover:bg-purple-700">Profile</Link>
            </li>
            <li>
              <Link to="/user/settings" className="block py-2.5 px-4 hover:bg-purple-700">Settings</Link>
            </li>
          </ul>
        </nav>
        <div className="p-4">
          <button className="block w-full py-2.5 px-4 bg-red-600 hover:bg-red-700">Logout</button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboard;
