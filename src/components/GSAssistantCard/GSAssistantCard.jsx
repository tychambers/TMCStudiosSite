import React, { useState } from 'react';
import '../../styles/project-card.css';
import ImageCarousel from './carousel';
import NavbarButton from '../navbar-button';
import MoreInfoCard from './more-info';

function GSAssistantCard() {
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
            <div className='card-title sedgwick-ave-display-regular'>GS IT Assistant</div>
            <div className='project-image'>
                {moreInfo ? <MoreInfoCard /> : <ImageCarousel />}
            </div>
            <div className='button-div'>
                <NavbarButton onClick={DisplayMoreInfo} name="Toggle Info" />
                <NavbarButton name="Visit Site" link="https://gs-it-assistant-1.onrender.com/" />
            </div>
        </div>
    )
}

export default GSAssistantCard;