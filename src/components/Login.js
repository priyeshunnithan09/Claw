import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/users/login', { username, password });
      console.log('Login successful:', response.data);
      // Optionally, save the response (e.g., token) and redirect
      navigate('/events'); // Use navigate for redirect
    } catch (err) {
      console.error('Login error:', err);
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;

