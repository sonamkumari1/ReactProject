import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (event) => {
    event.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && email === storedUser.email && password === storedUser.password) {
      localStorage.setItem('auth', 'true');
      login();
      navigate('/account');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="wrapper">
      <div className="logo">
        <img src="https://as2.ftcdn.net/v2/jpg/02/59/38/43/1000_F_259384390_LZjy7LNM3zeLSXMILA0NphvmOzUQXSuj.jpg" alt="Logo" />
      </div>
      <div className="text-center mt-4 name">
        Login
      </div>
      <form className="p-3 mt-3" onSubmit={handleLogin}>
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
        <button className="btn mt-3">Login</button>
      </form>
      <div className="text-center fs-6">
        <a href="#">Forget password?</a> or <a href="/register">Sign up</a>
      </div>
    </div>
  );
}

export default Login;