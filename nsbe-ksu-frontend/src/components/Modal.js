import React from 'react';

const Modal = ({ show, onClose, event }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 w-11/12 md:w-1/2 lg:w-1/3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl text-black font-bold">{event.title}</h2>
          <button onClick={onClose} className="text-black hover:text-gray-900">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 8.586l-4.95-4.95a1 1 0 10-1.414 1.414L8.586 10l-4.95 4.95a1 1 0 001.414 1.414L10 11.414l4.95 4.95a1 1 0 001.414-1.414L11.414 10l4.95-4.95a1 1 0 00-1.414-1.414L10 8.586z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        <p className="mb-4 text-black">Event Details: {event.description}</p>
        <p className="mb-2 text-black"><strong>Date:</strong> {event.date}</p>
        <p className="mb-2 text-black"><strong>Time:</strong> {event.time}</p>
        <p className="mb-2 text-black"><strong>Location:</strong> {event.location}</p>
        <a 
          href={event.rsvpLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-purple text-white py-2 px-4 rounded-full hover:bg-lightGray hover:text-purple mt-4"
        >
          RSVP
        </a>
      </div>
    </div>
  );
};

export default Modal;
