import React from 'react';
import './Resume.css';
import Footer from '../Footer/Footer';
import Navbar from '../Nav/Navbar';


function Resume() {
  return (
    <body>
      <Navbar />
      {/* <img src ={bg} alt=""/> */}
      <div id="page-container">
        <div id="content-wrap">
          Hello from resume
        </div>
        <Footer />
      </div>
      
    </body>
    
   
  );
}

export default Resume;
