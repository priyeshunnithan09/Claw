// client/src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    axios.post('/api/users/register', { username, password })
      .then(response => {
        console.log('User registered:', response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
