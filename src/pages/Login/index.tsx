import './styles.css';

import logoImage from '../../assets/logo.svg';
import padlock from '../../assets/padlock.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doLogin, LoginRequest } from '../../services/AuthenticationService';
import { storageOnLogin } from '../../services/StorageService';

export default function Login() {
  const [ loginForm, setLoginForm ] = useState({ username: '', password: '' });

  const navigate = useNavigate();

  // Partial implementation of https://www.codevertiser.com/react-forms-best-practices/
  const onChangeInput = (e: any) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const request: LoginRequest = {
      ...loginForm,
    };

    try {
      const response = await doLogin(request);
      storageOnLogin({ username, ...response });
      navigate('/books');
    } catch (e) {
      console.error(e);
      alert('Login failed! Try Again!');
    }

  };

  const { username, password } = loginForm;

  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImage} alt="Library Logo"/>
        <form onSubmit={onSubmit}>
          <h1>Access your Account</h1>
          <input
            placeholder="Username"
            type="text"
            name="username"
            value={username}
            onChange={onChangeInput}/>
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={onChangeInput}/>
          <button className="button" type="submit">Login</button>
        </form>
      </section>
      <img src={padlock} alt="Login"/>
    </div>
  );
}
