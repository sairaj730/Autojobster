import Jobs24h from '../jobs24hPage/jobs24h';
import './homepage.css';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <nav className="navbar">
        <div className="navbar-left">
          <span className="brand">random-app</span>
        </div>
        <div className="navbar-right">
          <span
            className="contact-link"
            onClick={() => navigate('/contact')}
            style={{ cursor: 'pointer' }}
          >
            Contact Us
          </span>
          <span
            className="applied-link"
            onClick={() => navigate('/applied')}
            style={{ cursor: 'pointer', color: '#000', fontWeight: 500 }}
          >
            Applied Jobs
          </span>
          <span
            className="jobs24h-link"
            onClick={() => navigate('/jobs24h')}
            style={{ cursor: 'pointer', color: '#000', fontWeight: 500 }}
          >
            Jobs
          </span>
          <FaUserCircle className="profile-icon" size={32} />
        </div>
      </nav>
      <main>
        <Jobs24h />
      </main>
    </div>
  );
};

export default Homepage;
