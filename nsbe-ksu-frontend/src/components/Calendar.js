import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import axios from 'axios';
import Modal from './Modal';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs().month());
  const [currentYear, setCurrentYear] = useState(dayjs().year());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get('/events');
      setEvents(response.data);
    };
    fetchEvents();
  }, []);

  const startOfMonth = dayjs().year(currentYear).month(currentMonth).startOf('month');
  const endOfMonth = dayjs().year(currentYear).month(currentMonth).endOf('month');
  const daysInMonth = endOfMonth.date();
  const startDay = startOfMonth.day();

  const calendarDays = [];
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="border border-gray-200 h-24"></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dateString = dayjs().year(currentYear).month(currentMonth).date(day).format('YYYY-MM-DD');
    const dayEvents = events.filter(event => event.date === dateString);
    calendarDays.push(
      <div key={day} className="border border-gray-200 h-24 flex flex-col items-center justify-start p-1 cursor-pointer hover:bg-gray-100">
        <span>{day}</span>
        {dayEvents.length > 2 ? (
          <div className="overflow-y-auto max-h-16 w-full">
            {dayEvents.map((event, index) => (
              <div 
                key={index} 
                className="bg-purple text-white text-xs rounded mt-1 px-2 py-1 truncate" 
                onClick={() => setSelectedEvent(event)}
              >
                {event.title}
              </div>
            ))}
          </div>
        ) : (
          dayEvents.map((event, index) => (
            <div 
              key={index} 
              className="bg-purple text-white text-xs rounded mt-1 px-2 py-1 truncate" 
              onClick={() => setSelectedEvent(event)}
            >
              {event.title}
            </div>
          ))
        )}
      </div>
    );
  }

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  return (
    <section id="calendar" className="relative bg-gradient-to-r from-purple to-off-white text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <button onClick={prevMonth} className="bg-purple text-white px-4 py-2 rounded">Previous</button>
          <h2 className="text-2xl font-bold">
            {dayjs().year(currentYear).month(currentMonth).format('MMMM YYYY')}
          </h2>
          <button onClick={nextMonth} className="bg-purple text-white px-4 py-2 rounded">Next</button>
        </div>
        <div className="hidden sm:grid grid-cols-7 gap-2">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center font-semibold">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-7 gap-2">
          {calendarDays}
        </div>
      </div>
      <Modal 
        show={selectedEvent !== null} 
        onClose={() => setSelectedEvent(null)} 
        event={selectedEvent || {}} 
      />
    </section>
  );
};

export default Calendar;
