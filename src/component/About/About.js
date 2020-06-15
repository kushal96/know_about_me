import React from 'react';
import './About.css';
import Footer from '../Footer/Footer';
import Navbar from '../Nav/Navbar';
import {Link} from 'react-router-dom';
import bg from '../images/tp.jpg';


function About() {
  return (
    <body>
      <div className="aboutdiv">
        <Navbar />
        {/* <img src ={bg} alt=""/> */}
        <div id="page-container">
          <div id="content-wrap">
            <div className="container darken-pseudo darken-with-text" >
              <img src ={bg} alt=""/>
            </div>
          
          </div>
          
          {/* <a href="#"><div className="bottomtopbtn">Top</div></a> */}

          <Footer />  
          <a href="#"><i id="test1" className="fa fa-arrow-up fa-lg bottomtopbtnabt"></i></a>

      </div>
      </div>
      
      
    </body>
    
   
  );
}

export default About;
