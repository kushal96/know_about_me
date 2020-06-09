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
        <b>THANK YOU!</b>
      </div>
      <div className="info2">
        Want to chat about something?
      </div>
      <div className="info3">
      <i class="fa fa-paper-plane msg"></i>GET IN TOUCH
      </div>

      <div className="table1">
          <ul id="icons-container">
            <li><i className="fa fa-github fa-lg git"></i></li>
            <li><i className="fa fa-instagram fa-lg insta"></i></li>
            <li><i className="fa fa-linkedin fa-lg link"></i></li>
            <li><i className="fa fa-facebook fa-lg fb"></i></li>
            <li><i className="fa fa-envelope fa-lg mail"></i></li>
          </ul>
      </div>
      <div className="info6">
        <i className="fa fa-copyright fa-fw trademark"></i>2020 Made with <div className="no_space"><i className="fa fa-heart fa-fw love"></i></div> by Kushal Reshamdalal.
      </div>
    </footer>
    
   
  );
}

export default Footer;
