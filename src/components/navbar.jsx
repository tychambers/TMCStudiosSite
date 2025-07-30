import { NavLink } from 'react-router-dom';
import '../styles/navbar.css'; 
import NavbarButton from './navbar-button';
import React, { useState } from 'react';
import HomeButton from './home-button';



const Navbar = () => {
      return (
        <nav className="navbar">
          <HomeButton name="TMCStudios" link="/" />
          <div className='navbar-links'>
            <NavbarButton name="Projects" link="/projects" />
            <NavbarButton name="About" link="/about" />
            <NavbarButton name="Contact" link="/contact" />
          </div>
        </nav>
      );
    };

export default Navbar;

