import React from 'react';
import '../styles/about.css'
import Image from '../assets/TylerAndLuke.png';

function About() {
    return (
    <div>
            <div className='navbar-space' />
            <div className='about-title-new'>
                <div className="space-50p"></div>
                <div className="title-about">
                    <h2 className="libre-baskerville-regular-white">MY STORY</h2>
                </div>
                <div className="title-divider-white"></div>
                <div className="title-body">
                    <p className="schibsted-grotesk-white">
                        TMC Studios is a business extension of Tyler Chambers. Professionally, I am an IT support analyst for Fortra LLC where I work full-time.
                        I created TMC Studios to open myself up to new business opportunities within development, as I find myself spending an increasing amount of time designing websites and applications.
                        I am interested in collaborating on projects and making something truly unique.
                    </p>
                </div>
            </div>
            <div className='about-mission'>
                <div className='mission-picture'></div>
                <div className='mission-title bungee-green'>THE MISSION</div>
                <div className='mission-subtitle playwrite-fr-moderne-thin-black'>Building Trust Through Quality Service</div>
                <div className='mission-body schibsted-grotesk-test'>
                    We view every project as an opportunity to build lasting client relationships. Our mission revolves around establishing trust and delivering excellence in every service we provide.
                    Tyler is also a proud father of 2 boys, and a guitar player.
                </div>
            </div>
            <div className="footer">
                Copyright TMCStudios LLC | Site Design by Tyler Chambers
            </div>
    </div>
    );
}

export default About;