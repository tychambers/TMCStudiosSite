import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar-button.css';
import '../styles/navbar.css'; 

function HomeButton(props) {


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
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    textdecoration: 'none',
    };

    const textStyle = {
        color: isHovered? '#2F4F4F' : 'whitesmoke',
    }

    return (
    <button className="navbar-brand sedgwick-ave-display-regular"
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

export default HomeButton;