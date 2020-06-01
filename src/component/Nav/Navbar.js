import React, { Component } from 'react';
import logo from '../images/logo.png';
import './Navbar.css';
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
                <div className="topnav-centered">
                    <ul className={this.state.isOpen ? 'showNav' : 'undefined'}>
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/about'>ABOUT</Link></li>
                        <li><Link to='/projects'>PROJECTS</Link></li>
                        <li><Link to='/resume'>RESUME</Link></li>
                        <li><Link to='/contact'>CONTACT</Link></li>
                    </ul>
                </div>
                
            </nav>
        )
    }
}

export default Navbar;