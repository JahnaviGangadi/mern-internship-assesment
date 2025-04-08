import React, { useState, useEffect } from 'react';

const Profile = ({ token, onLogout }) => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/auth/profile', {
          headers: { 'x-auth-token': token }
        });
        const data = await res.json();
        if (res.ok) {
          setUser(data);
        } else {
          setMessage(data.message);
        }
      } catch (err) {
        setMessage('Error fetching profile.');
      }
    };
    fetchProfile();
  }, [token]);

  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <div className="profile-card">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={onLogout}>Logout</button>
        </div>
      ) : (
        <p>{message || 'Loading...'}</p>
      )}
    </div>
  );
};

export default Profile;
