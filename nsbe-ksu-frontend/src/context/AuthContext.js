import React, { createContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isLoggedIn: false, user: null });

  const login = async (credentials) => {
    try {
      const response = await axios.post('http://localhost:5000/auth/login', credentials, { withCredentials: true });
      const { token, user } = response.data;
      setAuth({ isLoggedIn: true, user });
      localStorage.setItem('token', token);
      return user;
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Invalid username or password');
    }
  };

  const logout = () => {
    axios.post('http://localhost:5000/auth/logout', {}, { withCredentials: true }).then(() => {
      setAuth({ isLoggedIn: false, user: null });
      localStorage.removeItem('token');
    });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
