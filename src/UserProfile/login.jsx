import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-container">
      <div className="button-group">
        <button
          className={isLogin ? 'active' : ''}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={!isLogin ? 'active' : ''}
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </button>
      </div>
      <form className="login-form">
        {isLogin ? (
          <>
            <input type="text" placeholder="Username or Email" required />
            <input type="password" placeholder="Password" required />
          </>
        ) : (
          <>
            <input type="text" placeholder="Username or Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
          </>
        )}
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
    </div>
  );
};

export default Login;
