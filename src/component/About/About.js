import React from 'react';
import './About.css';
import Footer from '../Footer/Footer';
import Navbar from '../Nav/Navbar';
import {Link} from 'react-router-dom';
import bg from '../images/tp.jpg';


function About() {
  return (
      <div className="aboutdiv">
      <div className="bg-img-abt">
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
          <a href="#"><i id="test1" className="fa fa-arrow-up fa-lg bottomtopbtnabt"></i></a>

      </div>
    
   
  );
}

export default About;
