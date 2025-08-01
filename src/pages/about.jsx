import React from 'react';
import '../styles/about.css'
import Image from '../assets/TylerAndLuke.png';

function About() {
    return (
    <div className='about-page'>
        <div className='navbar-space' />
        <div className='about-title sedgwick-ave-display-regular'>
            <h1 className='title'>About</h1>
        </div>
        <div className='about-me-detail'>
            <div className='professional-image'>
            <img className='pro-image' src={Image} />
            </div>
            <p className='about-text'>TMC Studios was founded by Tyler Chambers in 2025 as a side-project. Tyler is a father of two boys and a part-time software developer. He works full-time at Fortra LLC as a support analyst supporting Globalscape's EFT software. He develops software using Javascript (React, NodeJS), Python and C#. If you are interested in working with TMCStudios please contact us by navigating to the contact page.</p>
        </div>
        <div className='bottom'>

        </div>
    </div>
    );
}

export default About;