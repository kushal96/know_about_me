import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';


function Footer() {
  return (
    <footer id="footer">
      <div className="info1">
        THANKS!
      </div>
      <div className="info2">
        Want to chat about something?
      </div>
      <div className="info3">
        Conact me
      </div>
      <div class="footer-container">
        <ul>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/about'>ABOUT</Link></li>
          <li><Link to='/projects'>PROJECTS</Link></li>
          <li><Link to='/resume'>RESUME</Link></li>
          <li><Link to='/contact'>CONTACT</Link></li>
        </ul>
        
      </div>

      
      <div className="info5">
        icons
      </div>
      <div className="info6">
        Made with love by Kushal Reshamdalal
      </div>
    </footer>
    
   
  );
}

export default Footer;
