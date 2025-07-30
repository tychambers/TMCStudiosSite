import React, { useState } from 'react';
import '../styles/project-card.css';
import ImageCarousel from './carousel';
import NavbarButton from './navbar-button';
import MoreInfoCard from './more-info';

function ProjectCard() {
    const [moreInfo, setMoreInfo] = useState(false)

    function DisplayMoreInfo() {
        if (!moreInfo) {
            setMoreInfo(true)
        } else {
            setMoreInfo(false)
        }
    }

    const moreInfoStyle = {
        backgroundColor: moreInfo ? '#8FBC8F' : '#2F4F4F', 
    }

    return (
        <div className='card' style={moreInfoStyle}>
            <div className='card-title sedgwick-ave-display-regular'>EFT Tools</div>
            <div className='project-image'>
                {moreInfo ? <MoreInfoCard /> : <ImageCarousel />}
            </div>
            <div className='button-div'>
                <NavbarButton onClick={DisplayMoreInfo} name="Toggle Info" />
                <NavbarButton name="Download" link="https://www.dropbox.com/scl/fi/ji2bh6wrj69j423kdmt29/EFT-Tools.zip?rlkey=6flm0egd6p4jzhz5dh0inwuki&st=au5qtpcx&dl=1" />
            </div>
        </div>
    )
}

export default ProjectCard;