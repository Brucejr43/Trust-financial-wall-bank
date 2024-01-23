// App.js
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Loginpage/Login';
import Transfer from './Pages/Transfer/Transfer';
import Unavailable from './Pages/Unavailable/Unavailable';
import './App.scss';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      {isMobile ? (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Transfer" element={<Transfer />} />
          <Route path="/Unavailable" element={<Unavailable />} />
        </Routes>
      ) : (
        <div>
          <p>Please visit this site on a mobile device for an optimal experience.</p>
        </div>
      )}
    </div>
  );
}

export default App;
