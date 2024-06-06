import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { auth, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="bg-purple text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="mb-4 md:mb-0 flex items-center">
          <img src="/imgs/NSBE_organization_logo.png" alt="NSBE Logo" className="h-8 w-8 mr-2" />
          <Link to="/" className="text-2xl font-bold">NSBE KSU</Link>
        </div>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-lightGray">Home</Link>
          {auth.isLoggedIn && auth.user.isLeader && (
            <>
              <Link to="/admin/sponsors" className="hover:text-lightGray">Sponsors</Link>
              <Link to="/admin/leadership" className="hover:text-lightGray">Leadership</Link>
              <Link to="/admin/events" className="hover:text-lightGray">Events</Link>
            </>
          )}
          {auth.isLoggedIn && !auth.user.isLeader && (
            <Link to="/user/events" className="hover:text-lightGray">My Events</Link>
          )}
          {auth.isLoggedIn ? (
            <>
              <Link to={auth.user.isLeader ? "/admin" : "/user"} className="hover:text-lightGray">Profile</Link>
              <Link to={auth.user.isLeader ? "/admin/settings" : "/user/settings"} className="hover:text-lightGray">Settings</Link>
              <button onClick={handleLogout} className="hover:text-lightGray">Logout</button>
            </>
          ) : (
            <Link to="/login" className="hover:text-lightGray">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
