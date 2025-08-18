import React from 'react';
import '../styles/home.css'
import ProjectCard from "../components/project-card"
import MonsterCard from '../components/MonsterFTPCard/monster-card';
import DjangoSiteCard from '../components/DjangoSite/django-site-card';
import ScriptsCard from '../components/Scripts/scripts-card';
import FourTrackSiteCard from '../components/FourTrackCard/fourtrack-site-card';
import GSAssistantCard from '../components/GSAssistantCard/GSAssistantCard';


function Projects() {
    return (
    <div className='home-page'>
        <div className="navbar-space" />
        <div className='about-title sedgwick-ave-display-regular'>
                <h1 className='title'>Projects</h1>
        </div>
        <div className='project-cards'>
            <GSAssistantCard />
            <FourTrackSiteCard />
            <ProjectCard />
            <MonsterCard />
            <DjangoSiteCard />
            <ScriptsCard />
        </div>
        <div className='space-at-bottom' />
        <div className="footer">
                Copyright TMCStudios LLC | Site Design by Tyler Chambers
        </div>
    </div>

    );
}

export default Projects;