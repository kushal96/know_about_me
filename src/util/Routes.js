import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../component/Home/Home';
import About from '../component/About/About';
import Contact from '../component/Contact/Contact';
import Projects from '../component/Projects/Projects';
import Resume from '../component/Resume/Resume';


const Routes=(
    <Router>
        {/* Path to pages from “React-Router-Dom.” Npm, www.npmjs.com/package/react-router-dom. */}
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/resume"component={Resume}/>
        </div>
    </Router>
)

export default Routes;