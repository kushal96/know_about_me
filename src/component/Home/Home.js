import React from 'react';
import './Home.css';

import Navbar from '../Nav/Navbar';
import Footer from '../Footer/Footer';
import bg from '../images/first_bg.jpg';


function Home() {
  return (
    <body>
      <div className="homediv">
        <Navbar />
        {/* <img src ={bg} alt=""/> */}
        <div id="page-container">
          <div id="content-wrap">
            Hello
          </div>
          <Footer />
        </div>
      </div>
      
      
    </body>
    
   
  );
}

export default Home;
