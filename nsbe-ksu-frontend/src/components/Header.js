import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { auth, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-purple text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/imgs/NSBE_organization_logo.png" alt="NSBE Logo" className="h-8 w-8 mr-2" />
          <Link to="/" className="text-2xl font-bold">KSU NSBE</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
        <nav className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="block md:inline-block mt-4 md:mt-0 hover:text-lightGray">Home</Link>
          {auth.isLoggedIn && auth.user.isLeader && (
            <>
              <Link to="/admin/sponsors" className="block md:inline-block mt-4 md:mt-0 hover:text-lightGray">Sponsors</Link>
              <Link to="/admin/leadership" className="block md:inline-block mt-4 md:mt-0 hover:text-lightGray">Leadership</Link>
              <Link to="/admin/events" className="block md:inline-block mt-4 md:mt-0 hover:text-lightGray">Events</Link>
            </>
          )}
          {auth.isLoggedIn && !auth.user.isLeader && (
            <Link to="/user/events" className="block md:inline-block mt-4 md:mt-0 hover:text-lightGray">My Events</Link>
          )}
          {auth.isLoggedIn ? (
            <>
              <Link to={auth.user.isLeader ? "/admin/settings" : "/user/settings"} className="block md:inline-block mt-4 md:mt-0 hover:text-lightGray">Settings</Link>
              <button onClick={handleLogout} className="block md:inline-block mt-4 md:mt-0 hover:text-lightGray">Logout</button>
            </>
          ) : (
            <Link to="/login" className="block md:inline-block mt-4 md:mt-0 hover:text-lightGray">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
