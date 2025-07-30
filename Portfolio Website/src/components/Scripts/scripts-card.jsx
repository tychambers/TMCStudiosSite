import React, { useState } from 'react';
import '../../styles/project-card.css';
import ImageCarousel from './carousel';
import NavbarButton from '../navbar-button';
import MoreInfoCard from './more-info';

function ScriptsCard() {
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
            <div className='card-title sedgwick-ave-display-regular'>Scripting</div>
            <div className='project-image'>
                {moreInfo ? <MoreInfoCard /> : <ImageCarousel />}
            </div>
            <div className='button-div'>
                <NavbarButton onClick={DisplayMoreInfo} name="Toggle Info" />
                <NavbarButton name="Visit Github" link="https://github.com/tychambers/EFT" />
            </div>
        </div>
    )
}

export default ScriptsCard;