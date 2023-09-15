import React from 'react';
import '../styles/Footer.css';

import CompanyLogo from '../asset/logo.png'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={CompanyLogo} alt="Company Logo" className="company-logo" />
        </div>
        <div className="footer-center">
          <p className="footer-link">Operating Company</p>
          <p className="footer-link">Inquiry</p>
        </div>
        <div className="footer-center">
          <p className="footer-link">Terms of Service</p>
          <p className="footer-link">Privacy Policy</p>
        </div>
        <div className="footer-right">
          <div className="social-icons">
            <a href="https://www.example.com">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.example.com">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.example.com">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="divider-line"></div>
      <div className="footer-copyright">
        <p>&copy; 2023 AI Service</p>
      </div>
    </footer>
  );
}

export default Footer;
