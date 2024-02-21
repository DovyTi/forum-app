import React, { useRef, useState } from 'react';
import http from '../plugins/http';
import videoBg from '../assets/197898 (1080p).mp4';
import { useStore } from '../store/MyStore';
import { Link, useNavigate } from 'react-router-dom';

function AuthPage() {
  const [action, setAction] = useState('Log in');
  const [role, setRole] = useState('Role');
  const [error, setError] = useState('');
  const [passError, setPassError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const regName = useRef();
  const regPass = useRef();
  const regPass2 = useRef();

  const loginName = useRef();
  const loginPass = useRef();

  const roleRef = useRef();

  const { setUser } = useStore((state) => state);

  const nav = useNavigate();

  async function register() {
    const user = {
      username: regName.current.value,
      passwordOne: regPass.current.value,
      passwordTwo: regPass2.current.value,
      role: roleRef.current.value,
    };

    const res = await http.post('register', user);
    console.log(res);

    if (res.success) {
      setAction('Log in');
      setSuccessMessage(res.message);
    } else {
      setPassError(res.message);
    }
  }

  async function login() {
    const user = {
      username: loginName.current.value,
      password: loginPass.current.value,
    };
    const res = await http.post('login', user);
    console.log(res);

    if (res.success) {
      localStorage.setItem('secret', res.data.token);
      setUser({
        username: res.data.username,
        image: res.data.image,
        role: res.data.role,
      });
      nav('/profile');
    } else {
      setError(res.message);
      setSuccessMessage('');
    }
  }

  return (
    <div className='auth-page'>
      <div className='overlay'></div>
      <video className='login-background ' src={videoBg} autoPlay loop muted />
      <div className='login d-flex f-column'>
        <h1>Welcome</h1>
        <p>To Forum</p>

        <div className='login-input'>
          {action === 'Log in' ? (
            <div></div>
          ) : (
            <div className='d-flex f-column g-1'>
              <input
                type='text'
                ref={regName}
                placeholder='Sign up Username'
                required
              />{' '}
              <input
                type='password'
                ref={regPass}
                placeholder=' Sing up Password 1'
                required
              />
              <input
                type='password'
                ref={regPass2}
                placeholder=' Sing up Password 2'
                required
              />
            </div>
          )}

          {action === 'Log in' ? (
            <div className='d-flex f-column g-1'>
              <input
                type='text'
                ref={loginName}
                placeholder='Log in Username'
                required
              />
              <input
                type='password'
                ref={loginPass}
                placeholder='Log in Password'
                required
              />
            </div>
          ) : (
            <div></div>
          )}

          {action === 'Log in' ? (
            <div></div>
          ) : (
            <select className='drop-box' name='' id='' ref={roleRef}>
              <option value='user'>User</option>
              <option value='admin'>Admin</option>
            </select>
          )}
          {action === 'Log in' ? (
            <label className='form-control'>
              <div></div>
              <input type='checkbox' name='checkbox' />
              Stay signed in
            </label>
          ) : (
            <div></div>
          )}

          {action === 'Log in' ? (
            <button className='login-btn' onClick={login}>
              Log in
            </button>
          ) : (
            <div></div>
          )}

          {action === 'Log in' ? (
            <div></div>
          ) : (
            <div>
              <button
                className='login-btn'
                onClick={() => {
                  register();
                }}
              >
                Sign up
              </button>
              <p className='error-message'>{passError}</p>
            </div>
          )}

          {action === 'Log in' ? (
            <div>
              <div className='message-box'>
                {error && <p className='error-message'>{error}</p>}
                {successMessage && (
                  <p className='success-message'>{successMessage}</p>
                )}
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {action === 'Log in' ? (
            <div className='white-line'></div>
          ) : (
            <div></div>
          )}
          {action === 'Log in' ? (
            <button
              className='create-new-account-btn'
              onClick={() => {
                setAction('Sign Up');
                setError('');
              }}
            >
              Create new account
            </button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
