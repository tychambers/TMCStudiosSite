import React, { useState } from 'react';
import '../../styles/project-card.css';
import ImageCarousel from './carousel';
import NavbarButton from '../navbar-button';
import MoreInfoCard from './more-info';

function MonsterCard() {
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
            <div className='card-title sedgwick-ave-display-regular'>Monster FTP</div>
            <div className='project-image'>
                {moreInfo ? <MoreInfoCard /> : <ImageCarousel />}
            </div>
            <div className='button-div'>
                <NavbarButton onClick={DisplayMoreInfo} name="Toggle Info" />
                <NavbarButton name="Download" link="https://www.dropbox.com/scl/fi/ndes68od0sk056dj3svl0/MonsterFTP.zip?rlkey=y67y16wx1w880b6bmo7o15h0w&st=uh5sx7xu&dl=1" />
            </div>
        </div>
    )
}

export default MonsterCard;