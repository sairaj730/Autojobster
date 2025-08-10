import React from 'react';
import Jobs24h from '../jobs24hPage/jobs24h';
import './homepage.css';
import { FaUserCircle } from 'react-icons/fa';

const Homepage = () => {
  return (
    <div className="homepage-container">
      <nav className="navbar">
        <div className="navbar-left">
          <span className="brand">random-app</span>
        </div>
        <div className="navbar-right">
          <span
            className="contact-link"
            onClick={() => window.location.href = '/contact'}
            style={{ cursor: 'pointer' }}
          >
            Contact Us
          </span>
          <span
            className="applied-link"
            onClick={() => window.location.href = '/applied'}
            style={{ cursor: 'pointer', marginLeft: '18px', color: '#000', fontWeight: 500 }}
          >
            Applied Jobs
          </span>
          <span
            className="jobs24h-link"
            onClick={() => window.location.href = '/jobs24h'}
            style={{ cursor: 'pointer', marginLeft: '18px', color: '#000', fontWeight: 500 }}
          >
            Jobs (24h)
          </span>
          <FaUserCircle className="profile-icon" size={32} />
        </div>
      </nav>
      <Jobs24h />
    </div>
  );
};

export default Homepage;
