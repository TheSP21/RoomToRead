import React from 'react';
import './home.css'; // Import external CSS for the footer

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>Logo</div>
        <ul style={styles.navLinks}>
          <li style={styles.navItem}>Student</li>
          <li style={styles.navItem}>Books</li>
          <li style={styles.navItem}>Report an Issue</li>
          <li style={styles.navItem}>Logout</li>
        </ul>
      </nav>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Background Image with Buttons */}
        <div style={styles.imageSection}>
          <button style={styles.button}>Check In</button>
          <button style={styles.button}>Check Out</button>
        </div>

        {/* Counter Section */}
        <div style={styles.counterSection}>
          <div style={styles.counterItem}>200+ Students</div>
          <div style={styles.counterItem}>1000+ Books</div>
          <div style={styles.counterItem}>150+ Libraries</div>
          <div style={styles.counterItem}>100+ Towns</div>
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
            <a href="https://linkedin.com">LinkedIn</a>
            <a href="https://youtube.com">YouTube</a>
            <a href="https://instagram.com">Instagram</a>
            <a href="https://facebook.com">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    fontSize: '1.5rem',
  },
  navLinks: {
    display: 'flex',
    listStyleType: 'none',
  },
  navItem: {
    marginLeft: '2rem',
    cursor: 'pointer',
  },
  mainContent: {
    display: 'flex',
    height: '80vh',
  },
  imageSection: {
    flex: '1',
    backgroundImage: 'url("your-image-url.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  button: {
    padding: '1rem 2rem',
    margin: '1rem',
    fontSize: '1.2rem',
    cursor: 'pointer',
  },
  counterSection: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterItem: {
    fontSize: '2rem',
    margin: '1rem 0',
    animation: 'move 2s infinite',
  },
};

export default home;
