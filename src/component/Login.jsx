import React, { useState } from 'react';
import './Login.css';
import Navbar from './Navbar.jsx';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const Dashboard = useNavigate();

  function handlesubmit() {
    if (email === 'admin@mmi.com' && password === 'MMI@456') {
      window.sessionStorage.setItem('admin', true);
      Dashboard('/admin/Dashboard');
    } else {
      alert('Incorrect userID or Password');
    }
  }

  return (
    <div>
      <Navbar />
      <h1>Login Form</h1>
      <div className="input-parent">
        <input
          type="text"
          placeholder="Enter your E-mail"
          onChange={(e) => setemail(e.target.value)}
        />

        <div className="input-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your Password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <span
            className="icon-unicode"
            onClick={() => setShowPassword(!showPassword)}
          >
            <i
              className="fa"
              style={{ fontSize: '24px' }}
              dangerouslySetInnerHTML={{
                __html: showPassword ? '&#xf06e;':'&#xf070;' ,
              }}
            />
          </span>
        </div>

        <button type="submit" onClick={handlesubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
