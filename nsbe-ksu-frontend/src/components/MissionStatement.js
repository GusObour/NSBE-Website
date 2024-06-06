import React from 'react';

const MissionStatement = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple to-off-white text-white py-20">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10">Our Mission</h2>
        <p className="text-lg md:text-xl lg:text-2xl mb-10 text-center">
          The National Society of Black Engineers (NSBE) is dedicated to increasing the number of culturally responsible Black Engineers who excel academically, succeed professionally, and positively impact the community.
        </p>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-6">Our Objectives</h3>
        <ul className="text-lg md:text-xl lg:text-2xl space-y-6 list-inside mx-auto max-w-4xl bg-white text-black shadow-lg rounded-lg p-8">
          <li className="flex items-start">
            <span className="bg-purple text-white rounded-full h-10 w-10 flex items-center justify-center mr-4 font-bold">1</span>
            <span>Stimulate and develop student interest in the various engineering disciplines</span>
          </li>
          <li className="flex items-start">
            <span className="bg-purple text-white rounded-full h-10 w-10 flex items-center justify-center mr-4 font-bold">2</span>
            <span>Increase the number of minority students at the undergraduate and graduate level</span>
          </li>
          <li className="flex items-start">
            <span className="bg-purple text-white rounded-full h-10 w-10 flex items-center justify-center mr-4 font-bold">3</span>
            <span>Promote public awareness of engineering and the opportunities for Black and minority students in engineering</span>
          </li>
          <li className="flex items-start">
            <span className="bg-purple text-white rounded-full h-10 w-10 flex items-center justify-center mr-4 font-bold">4</span>
            <span>Function as a representative body on issues and developments that affect the careers of Black Engineers</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MissionStatement;
