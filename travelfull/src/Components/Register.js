import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authzId, setAuthzId] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!fullname || !email || !password || !authzId) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        fullname,
        email,
        password,
        authz_id: authzId
      });

      if (response.status === 201) {
        setSuccess('User registered successfully');
        setError('');
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('Error registering user');
      }
      setSuccess('');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>User Type</label>
          <select value={authzId} onChange={(e) => setAuthzId(e.target.value)}>
            <option value="">Select User Type</option>
            <option value="1">Admin</option>
            <option value="2">User</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
