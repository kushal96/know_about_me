import React from 'react';
import './Contact.css';
import Footer from '../Footer/Footer';
import Navbar from '../Nav/Navbar';


function Contact() {
  return (
      <div className="contactdiv">
      <div className="bg-img-contact">
           <Navbar />
           <h1 className="title">
              <b>KUSHAL RESHAMDALAL</b>
           </h1>
        
          <div id="page-container">
            <div id="content-wrap">
            
              
            </div>
          </div>
        </div>
            <div id="footerhome">
                <Footer />
            </div>
            <a href="#"><i className="fa fa-arrow-up fa-lg bottomtopbtnresume"></i></a>
        
      </div>
    
   
  );
}

export default Contact;
