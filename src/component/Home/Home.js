import React from 'react';
import './Home.css';

import Navbar from '../Nav/Navbar';
import bg from '../images/first_bg.jpg';


function Home() {
  return (
    <body>
      <Navbar />
      <img src ={bg} alt=""/>
      <div className="test">
        Hello
      </div>
    </body>
    
   
  );
}

export default Home;
