import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar-button.css'; 

function NavbarButton(props) {


    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
    setIsHovered(true);
    };

    const handleMouseLeave = () => {
    setIsHovered(false);
    };

    const buttonStyle = {
    backgroundColor: isHovered ? 'whitesmoke' : '#2F4F4F', 
    color: isHovered? 'whitesmoke' : '#2F4F4F',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    textdecoration: 'none',
    };

    const textStyle = {
        color: isHovered? '#2F4F4F' : 'whitesmoke',
    }

    return (
    <button
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={props.onClick}
    >
        <NavLink
         style={textStyle}
         className="navlink" to={props.link}>{props.name}</NavLink>
    </button>
    );
}

export default NavbarButton;