import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DonationsAndSponsors = () => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await axios.get('/sponsors');
        setSponsors(response.data);
      } catch (error) {
        console.error('Error fetching sponsors:', error);
      }
    };

    fetchSponsors();
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-purple to-off-white text-white py-20">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10">Our Sponsors</h2>
        <div className="flex flex-wrap justify-center items-center mb-10">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="bg-white text-black rounded-lg shadow-lg p-4 m-4 text-center transition-transform transform hover:scale-105">
              <img src={`${process.env.PUBLIC_URL}${sponsor.image}`} alt={sponsor.name} className="h-24 w-auto mx-auto mb-2 rounded-full border-2 border-purple-700" />
              <p className="text-lg font-semibold">{sponsor.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            Support us by donating to our cause. Your contributions help us achieve our mission and objectives.
          </p>
          <a 
            href="https://www.givecampus.com/campaigns/34395/donations/new" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-purple text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:bg-off-white"
          >
            Donate Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default DonationsAndSponsors;
