import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <footer id="footer">

      <div className="table">
          <ul id="footer-container">
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/about'>ABOUT</Link></li>
            <li><Link to='/projects'>PROJECTS</Link></li>
            <li><Link to='/resume'>RESUME</Link></li>
            <li><Link to='/contact'>CONTACT</Link></li>
          </ul>
      </div>
      <div className="info1">
        THANK YOU!
      </div>
      <div className="info2">
        Want to chat about something?
      </div>
      <div className="info3">
        Get in touch
      </div>

      <div className="table1">
          <ul id="icons-container">
            <li><i className="fa fa-github fa-lg"></i></li>
            <li><i className="fa fa-instagram fa-lg"></i></li>
            <li><i className="fa fa-linkedin fa-lg"></i></li>
            <li><i className="fa fa-facebook fa-lg"></i></li>
            <li><i className="fa fa-envelope fa-lg"></i></li>
          </ul>
      </div>
      <div className="info6">
        Made with <div className="no_space"><i className="fa fa-heart"></i></div> by Kushal Reshamdalal
      </div>
      

    


      
    </footer>
    
   
  );
}

export default Footer;
