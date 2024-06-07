import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Leadership = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const response = await axios.get('/leadership');
        setLeaders(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching leaders:', error);
      }
    };

    fetchLeaders();
  }, []);

  return (
    <section id="leadership" className="bg-gradient-to-r from-purple to-off-white text-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center mb-10">Our Leadership</h2>
        <div className="flex flex-wrap justify-center items-center">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-xs text-center">
              <img 
                src={`${process.env.PUBLIC_URL}${leader.image}`} 
                alt={leader.user.username} 
                className="h-32 w-32 rounded-full mx-auto mb-4" 
              />
              <h3 className="text-xl font-semibold mb-2">{leader.user.username}</h3>
              <p className="text-gray-700">{leader.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
