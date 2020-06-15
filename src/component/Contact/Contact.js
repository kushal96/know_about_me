import React from 'react';
import './Contact.css';
import Footer from '../Footer/Footer';
import Navbar from '../Nav/Navbar';


function Contact() {
  return (
    <body>
      <div className="contactdiv">
        <Navbar />
        {/* <img src ={bg} alt=""/> */}
        <div id="page-container">
          <div id="content-wrap">
            hello from contact
          </div>
          <Footer />
          <a href="#"><i id="test1" className="fa fa-arrow-up fa-lg bottomtopbtncontact"></i></a>
        </div>
      </div>
      
      
    </body>
    
   
  );
}

export default Contact;
