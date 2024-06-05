// Footer.jsx
import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faEnvelope,faPhone,faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faSquareInstagram,faTwitter,faFacebook } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-item">
          <h3>Trademark</h3>
          <p> <FontAwesomeIcon icon={faCopyright} /> 2024 Shelfwise. All rights reserved.</p>
        </div>
        <div className="footer-item">
          <h3>Contact Us</h3>
          <p><i class="fa-solid fa-map-location"></i><FontAwesomeIcon icon={faLocationDot} /> #69 Church Street, Bengaluru, India.</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> hi.shelfwise@.gmail.com</p>
          <p><FontAwesomeIcon icon={faPhone} /> +91 7734723199</p>
        </div>
        <div className="footer-item">
          <h3>Social Media</h3>
          <ul>
            <li> <FontAwesomeIcon icon={faFacebook} /> Facebook</li>
            <li> <FontAwesomeIcon icon={faTwitter} /> Twitter</li>
            <li> <FontAwesomeIcon icon={faSquareInstagram} /> Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
