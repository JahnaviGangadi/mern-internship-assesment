import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={token ? <Profile token={token} onLogout={handleLogout} /> : <Navigate to="/login" />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
