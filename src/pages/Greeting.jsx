import React, { useState } from 'react';
import './Greeting.scss';

const Greeting = () => {
  const [customTime, setCustomTime] = useState('');
  const [greeting, setGreeting] = useState('');

  const determineGreeting = () => {
    if (customTime !== '') {
      const currentTime = parseInt(customTime);
      const greetings = ['Good Morning!', 'Good Afternoon!', 'Good Evening!'];
      const bodyClasses = ['morning', 'afternoon', 'evening'];
      const index = (currentTime >= 5 && currentTime < 12) ? 0 : (currentTime >= 12 && currentTime < 18) ? 1 : 2;

      setGreeting(greetings[index]);
      document.body.className = bodyClasses[index];
    }
  };

  return (
    <div className="greeting-container">
      <label>
        Enter Time:
        <input
          type="number"
          value={customTime}
          onChange={(e) => setCustomTime(e.target.value)}
          placeholder="Enter hour (0-24)"
        />
      </label>
      <button onClick={determineGreeting} className={`styled-button ${greeting.toLowerCase()}`}>
        Determine Greeting
      </button>
      {greeting && (
        <div className={`greeting-output ${greeting.toLowerCase()}`}>
          <h1>{greeting}</h1>
        </div>
      )}
    </div>
  );
};

export default Greeting;
