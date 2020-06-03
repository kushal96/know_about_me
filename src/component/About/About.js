import React from 'react';
import './About.css';
import Footer from '../Footer/Footer';
import Navbar from '../Nav/Navbar';


function About() {
  return (
    <body>
      <Navbar />
      {/* <img src ={bg} alt=""/> */}
      <div id="page-container">
        <div id="content-wrap">
          Hello from about
        </div>
        <Footer />
      </div>
      
    </body>
    
   
  );
}

export default About;
