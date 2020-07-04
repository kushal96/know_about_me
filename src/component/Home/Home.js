import React from 'react';
import './Home.css';

import Navbar from '../Nav/Navbar';
import Footer from '../Footer/Footer';
import code_block_pic1 from '../images/code_block_pic.jpg';
import profile from '../images/profile.jpg';
import programming from '../images/programming.jpg';



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
        
        
        {/* code block pic with description */}
        <div className="code-block">
          <img src={code_block_pic1} alt="" className="code_block_pic"/>
            <div class="code-block-desc">
              <h2 className="passion-line">My passion and focus is to <br></br>develop an application with efficient code.</h2><br></br>
              <p class="desc-line">Let's be honest and cut through the marketing fluff. You need a website that <br></br> 
              looks amazing and actually works. Bottom line, that's what I do. And if you want<br></br>
              to learn more about working with me, pick up the phone and give me a call (or email).</p>
            </div>
        </div>

        <div className="profile-name">
          <p className="profile-text">
            PROFILE
          </p>
        </div>
        <div className="profile-main">
          <div className="profile-picture">
            <img src={profile} alt="" className="profile-pic-inside"/>
          </div>
          <div className="profile-info">
            <p className="space"></p>
            <br></br>
            <p className="desc"><span className="n-color"><b>Name : </b></span> Kushal Reshdamalal</p>
            <br></br>
            <p className="desc"><span className="n-color"><b>Age : </b></span> 24</p>
            <br></br>
            <p className="desc"><span className="n-color"><b>Birthplace : </b></span> Surat, Gujarat, India</p>
            <br></br>
            <p className="desc"><span className="n-color"><b>Favourite Colour : </b></span> Blue</p>
            <br></br>
            <p className="desc"><span className="n-color"><b>Lucky Number : </b></span> 3</p>
            <br></br>
            <p className="desc"><span className="n-color"><b>Choice Ediotr : </b></span> IntelliJ</p>
            <br></br>
            <p className="desc"><span className="n-color"><b>Location : </b></span> St. John's, NL, Canada</p>
          </div>
          <div className="profile-code-picture">
            <img src={programming} alt="" className="programming"/>
          </div>
        </div>
        
       

            <div id="footerhome">
                <Footer />
            </div>
            {/* <a href="#"><i className="fa fa-arrow-up fa-lg bottomtopbtnresume"></i></a> */}
        
      </div>
    
   
  );
}

export default Home;
