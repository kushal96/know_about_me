import React from 'react';
import './Projects.css';
import Footer from '../Footer/Footer';
import Navbar from '../Nav/Navbar';


function Projects() {
  return (
    <body>
      <div className="projectsdiv">
        <Navbar />
        {/* <img src ={bg} alt=""/> */}
        <div id="page-container">
          <div id="content-wrap">
            Hello from projects
          </div>
          <Footer />
        </div>
      </div>
      
      
    </body>
    
   
  );
}

export default Projects;
