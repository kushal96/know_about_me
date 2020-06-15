import React from 'react';
import './Home.css';

import Navbar from '../Nav/Navbar';
import Footer from '../Footer/Footer';
import bg from '../images/first_bg.jpg';


function Home() {
  return (
    <body>
      <div className="homediv">
      <div className="container darken-pseudo darken-with-text" >
      <Navbar />
              <p>hello</p>
              {/* <img src ={bg} alt=""/> */}
      </div>
        
        
        <div id="page-container">
          <div id="content-wrap">
          
            
          </div>
          <div id="footerhome">
            <Footer />
          </div>
          <a href="#"><i className="fa fa-arrow-up fa-lg bottomtopbtnresume"></i></a>
        </div>
      </div>
      
      
    </body>
    
   
  );
}

export default Home;
