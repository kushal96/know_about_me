import React from 'react';
import './Home.css';

import Navbar from '../Nav/Navbar';
import Footer from '../Footer/Footer';
import bg from '../images/first_bg.jpg';



function Home() {
  return (
      <div className="homediv">
        <div className="bg-img">
           <Navbar />
           <h1 className="title-home">
              <b>KUSHAL RESHAMDALAL</b>
           </h1>
           <h3 className="subtitle-home">
             CREATIVE THINKER + SOFTWARE ENGINEER + DECENT HUMAN BEING
           </h3>
        </div>
        <div className="profile_description">
          
        </div>
        <div>
          hello
        </div>
            <div id="footerhome">
                <Footer />
            </div>
            <a href="#"><i className="fa fa-arrow-up fa-lg bottomtopbtnresume"></i></a>
        
      </div>
    
   
  );
}

export default Home;
