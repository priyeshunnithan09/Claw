// client/src/components/EventList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EventList() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events');
        setEvents(response.data);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Error fetching events. Please try again later.');
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Events</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h3>{event.name}</h3>
            <p>Location: {event.location}</p>
            <p>Date: {event.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
