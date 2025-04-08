import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        onLogin(data.token);
        navigate('/');
      } else {
        setMessage(data.message);
      }
    } catch (err) {
      setMessage('Error logging in.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}

      {/* Link to Registration Page */}
      <p>
        Don't have an account? <Link to="/register">Register Here</Link>
      </p>
    </div>
  );
};

export default Login;
