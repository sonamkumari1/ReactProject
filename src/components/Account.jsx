import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

function Account() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    if (!auth) {
      navigate('/');
    }

    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setEmail(user.email);
    }
  }, [navigate]);

  const handleUpdate = (event) => {
    event.preventDefault();
    const user = { email, password };
    localStorage.setItem('user', JSON.stringify(user));
    setMessage('Account updated successfully!');
    setTimeout(() => setMessage(''), 2000); // Clear message after 3 seconds
  };

  return (
    <div className="wrapper">
      <div className="logo">
        <img src="https://as2.ftcdn.net/v2/jpg/02/59/38/43/1000_F_259384390_LZjy7LNM3zeLSXMILA0NphvmOzUQXSuj.jpg" alt="Logo" />
      </div>
      <div className="text-center mt-4 name">
        Account
      </div>
      <form className="p-3 mt-3" onSubmit={handleUpdate}>
        {message && <Alert variant="success">{message}</Alert>}
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            type="email"
            name="userName"
            id="userName"
            placeholder="Username"
            value={email}
            readOnly
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn mt-3" type="submit">Update</button>
      </form>
    </div>
  );
}

export default Account;
