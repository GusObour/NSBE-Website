import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple text-white py-10">
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <img src="/imgs/NSBE_organization_logo.png" alt="NSBE Logo" className="h-8 w-8 mr-2" />
            <a href="#" className="text-white text-2xl font-bold">KSU NSBE </a>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
            <a href="#home" className="text-lightGray hover:text-white">Home</a>
            <a href="#leadership" className="text-lightGray hover:text-white">Leadership</a>
            <a href="#calendar" className="text-lightGray hover:text-white">Calendar</a>
            <a href="#gallery" className="text-lightGray hover:text-white">Gallery</a>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/kstatensbe/" target="_blank" rel="noopener noreferrer" className="text-lightGray hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.061 2.633.337 3.608 1.311.975.975 1.25 2.242 1.311 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.061 1.366-.337 2.633-1.311 3.608-.975.975-2.242 1.25-3.608 1.311-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.061-2.633-.337-3.608-1.311-.975-.975-1.25-2.242-1.311-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.061-1.366.337-2.633 1.311-3.608.975-.975 2.242-1.25 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.015 7.052.072c-1.679.073-2.837.369-3.863 1.396-1.026 1.026-1.323 2.184-1.396 3.863C1.852 8.332 1.837 8.741 1.837 12s.015 3.668.072 4.948c.073 1.679.369 2.837 1.396 3.863 1.026 1.026 2.184 1.323 3.863 1.396C8.332 22.985 8.741 23 12 23s3.668-.015 4.948-.072c1.679-.073 2.837-.369 3.863-1.396 1.026-1.026 1.323-2.184 1.396-3.863.057-1.28.072-1.689.072-4.948s-.015-3.668-.072-4.948c-.073-1.679-.369-2.837-1.396-3.863-1.026-1.026-2.184-1.323-3.863-1.396C15.668.015 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0-2.882 1.44 1.44 0 0 0 0 2.882z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-10 text-lightGray text-center md:text-left">
          <marquee behavior="scroll" direction="left">
            to increase the number of culturally responsible black engineers who excel academically, succeed professionally and positively impact the community.
          </marquee>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
