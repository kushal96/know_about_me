import React, { Component } from 'react';
import logo from '../images/logo.png';
import './Navbar.css';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';

class Navbar extends Component {


    state={
        isOpen: false
    }

    handleClick =()=>{
        this.setState({
            isOpen:!this.state.isOpen,
        })
    }

    render() {
        return (
                <nav>
                    <div className="logoBtn">
                        <div className="logo">
                            <Link to='/'>
                                <img src ={logo} className="logo" alt=""/>
                            </Link>
                        </div>
                    
                        <div className="btn" onClick={this.handleClick}>
                            <div className="bar"> </div>
                            <div className="bar"> </div>
                            <div className="bar"> </div>
                        </div>
                    
                    </div>
                    <div className="navlinks">
                        <ul className={this.state.isOpen ? 'showNav' : 'undefined'}>
                            <li><NavLink to='/' exact activeStyle={{color: "#E1A87A"}}>HOME</NavLink></li>
                            <li><NavLink to='/about' exact activeStyle={{color: "#E1A87A"}}>ABOUT</NavLink></li>
                            <li><NavLink to='/projects' exact activeStyle={{color: "#E1A87A"}}>PROJECTS</NavLink></li>
                            <li><NavLink to='/resume' exact activeStyle={{color: "#E1A87A"}}>RESUME</NavLink></li>
                            <li><NavLink to='/contact' exact activeStyle={{color: "#E1A87A"}}>CONTACT</NavLink></li>
                        </ul>
                    </div>
                   
                </nav>
            
        )
    }
}

export default Navbar;