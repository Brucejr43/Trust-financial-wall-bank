// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setIsLoginSuccessful(null);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setIsLoginSuccessful(null);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (username === 'Jonathan' && password === 'Jonathan321') {
      setIsLoginSuccessful(true);
      // Redirect to the dashboard after successful login
      navigate('/dashboard');
    } else {
      setIsLoginSuccessful(false);
    }
  };

  return (
    <div>
      <div>
        <span className="welcome">Trust Financial Wall Bank</span>
      </div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {isLoginSuccessful === true && <p>Login successful! Redirecting to the dashboard...</p>}
      {isLoginSuccessful === false && (
        <p>Login failed. Please check your username and password.</p>
      )}
      {isLoginSuccessful === null && <p>Please enter your username to log in.</p>}
    </div>
  );
}

export default Login;
