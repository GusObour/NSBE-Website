import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import MissionStatement from './components/MissionStatement';
import DonationsAndSponsors from './components/DonationsAndSponsors';
import Leadership from './components/Leadership';
import Calendar from './components/Calendar';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import Settings from './components/Settings';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/admin/*" element={token ? <AdminDashboard /> : <Login setToken={setToken} />} />
          <Route path="/user/*" element={token ? <UserDashboard /> : <Login setToken={setToken} />} />
          <Route path="/settings" element={token ? <Settings /> : <Login setToken={setToken} />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={
            <main>
              <Hero />
              <MissionStatement />
              <DonationsAndSponsors />
              <Leadership />
              <Calendar />
              <Gallery />
            </main>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
