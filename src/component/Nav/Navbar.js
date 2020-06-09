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
                            <li><NavLink to='/' activeClassName="main-nav-active">HOME</NavLink></li>
                            <li><NavLink to='/about' activeClassName="main-nav-active">ABOUT</NavLink></li>
                            <li><NavLink to='/projects' activeClassName="main-nav-active">PROJECTS</NavLink></li>
                            <li><NavLink to='/resume' activeClassName="main-nav-active">RESUME</NavLink></li>
                            <li><NavLink to='/contact' activeClassName="main-nav-active">CONTACT</NavLink></li>
                        </ul>
                    </div>
                   
                </nav>
            
        )
    }
}

export default Navbar;