import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function NavBar() {
  const navigate = useNavigate();
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  const handleLogout = () => {
    localStorage.removeItem('secret');
    localStorage.removeItem('isLoggedIn');
    navigate('/');
    alert('User signed out!');
  };
  const nav = useNavigate();

  useEffect(() => {
    const checkUser = () => {
      if (!localStorage.getItem('secret')) {
        nav('/');
      } else {
        console.log('Authenticated');
      }
    };
    checkUser();
  }, [nav]);

  return (
    <header>
      <img
        className='forum-logo-img'
        src='https://www.forumfinancial.com/wp-content/uploads/2021/03/Forum_PrimaryLogo_TransparentBackground_216ppi_large.png'
        alt='Logo'
      />
      <nav ref={navRef} className='d-flex j-center a-center '>
        <Link to={'/profile'}>Profile</Link>
        <Link to={'/forum'}>Forum</Link>
        <Link to={'/messages'}>Messages</Link>
        <button className='log-out' onClick={handleLogout}>
          Logout
        </button>
        <button className='nav-btn nav-close-bnt' onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;
