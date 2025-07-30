import React from 'react';
import '../styles/home.css'
import ProjectCard from "../components/project-card"
import MonsterCard from '../components/MonsterFTPCard/monster-card';
import DjangoSiteCard from '../components/DjangoSite/django-site-card';
import ScriptsCard from '../components/Scripts/scripts-card';


function Projects() {
    return (
    <div className='home-page'>
        <div className="navbar-space" />
        <div className='about-title sedgwick-ave-display-regular'>
                <h1>Projects</h1>
        </div>
        <div>
            <p></p>
        </div>
        <div className='project-cards'>
            <ProjectCard />
            <MonsterCard />
            <DjangoSiteCard />
            <ScriptsCard />
        </div>
    </div>
    );
}

export default Projects;