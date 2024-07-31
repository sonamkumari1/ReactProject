import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    // Check if the email and password are not empty
    if (email && password) {
      // Store user data in local storage
      localStorage.setItem('user', JSON.stringify({ email, password }));
      navigate('/');
    } else {
      setError('Please provide both email and password');
    }
  };

  return (
    <div className="wrapper">
      <div className="logo">
        <img src="https://as2.ftcdn.net/v2/jpg/02/59/38/43/1000_F_259384390_LZjy7LNM3zeLSXMILA0NphvmOzUQXSuj.jpg" alt="Logo" />
      </div>
      <div className="text-center mt-4 name">
        Register
      </div>
      <form className="p-3 mt-3" onSubmit={handleRegister}>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            type="email"
            name="userName"
            id="userName"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btn mt-3">Register</button>
      </form>
      <div className="text-center fs-6">
        <a href="/">Already have an account? Login</a>
      </div>
    </div>
  );
}

export default Register;
