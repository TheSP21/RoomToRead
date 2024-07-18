import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import './home.css';
import './footer.css';
import CheckInPage from './CheckInPage';
import CheckOutPage from './CheckOutPage';
import StudentPage from './StudentPage';
import BooksPage from './BooksPage';
import ReportIssuePage from './ReportIssuePage';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/home');  // Navigate to /home on form submit
  };

  return (
    <div className="login-container">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLhyKGHzZwu8RbaWUphjIr0C8s-2M2MY7bmw&s" alt="Logo" className="logo" />
      <h2 className="font-bold">LOGIN</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="password" required />
        </div>
        <input type="submit" className="login-button" />
      </form>
    </div>
  );
}

function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); // Navigate back to login page on logout
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  // Dummy data for counters
  const counters = [
    { label: 'Students', count: 200 },
    { label: 'Books', count: 1000 },
    { label: 'Libraries', count: 150 },
    { label: 'Locations', count: 100 }
  ];

  return (
    <div className='home'>
      {/* Navbar */}
      <nav className="navbar">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLhyKGHzZwu8RbaWUphjIr0C8s-2M2MY7bmw&s" alt="Logo" className="homelogo" />
        <h2 className='companyname'>ROOM TO READ</h2>
        <ul className="nav-links">
          <li className="nav-item" onClick={() => handleNavigate('/student')}>Student</li>
          <li className="nav-item" onClick={() => handleNavigate('/books')}>Books</li>
          <li className="nav-item" onClick={() => handleNavigate('/report-issue')}>Report an Issue</li>
          <li className="nav-item" onClick={handleLogout}>Logout</li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        {/* Background Image with Buttons */}
        <div className="image-section">
          <button className="button" onClick={() => handleNavigate('/check-in')}>Check In</button>
          <button className="button" onClick={() => handleNavigate('/check-out')}>Check Out</button>
        </div>

        {/* Counter Section */}
        <div className="counter-section">
          {counters.map((counter, index) => (
            <div key={index} className="counter-box">
              <div className="counter-label">{counter.label}</div>
              <div className="counter-item">
                <CountdownCounter count={counter.count} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Top Programs</h4>
            <p>Program 1</p>
            <p>Program 2</p>
            <p>Program 3</p>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: example@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <a href="https://linkedin.com" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://youtube.com" aria-label="YouTube"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://facebook.com" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Countdown animation component
function CountdownCounter({ count }) {
  const [currentCount, setCurrentCount] = React.useState(count);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (currentCount > 0) {
        setCurrentCount(currentCount + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [currentCount]);

  return (
    <div className="countdown">{currentCount}</div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/check-in" element={<CheckInPage />} />
          <Route path="/check-out" element={<CheckOutPage />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/report-issue" element={<ReportIssuePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
