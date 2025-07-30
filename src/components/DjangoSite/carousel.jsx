import React, { useState } from 'react';
import '../../styles/carousel.css';
import Image1 from '../../assets/DjangoSite1.png';
import Image2 from '../../assets/DjangoSite2.png';
import Image3 from '../../assets/DjangoSite3.png';

function ImageCarousel () {
    // for button highlight
    const [isDisabled, setIsDisabled] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    
        const handleMouseEnter = () => {
        setIsHovered(true);
        };
    
        const handleMouseLeave = () => {
        setIsHovered(false);
        };

    const buttonStyle = {
        backgroundColor: isHovered ? 'whitesmoke' : '#2F4F4F', 
        color: isHovered? '#2F4F4F' : 'whitesmoke',
        visibility: isDisabled ? "hidden" : 'visible',    
    }

    const [isDisabled2, setIsDisabled2] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    
        const handleMouseEnter2 = () => {
        setIsHovered2(true);
        };
    
        const handleMouseLeave2 = () => {
        setIsHovered2(false);
        };

    const buttonStyle2 = {
    backgroundColor: isHovered2 ? 'whitesmoke' : '#2F4F4F', 
    color: isHovered2? '#2F4F4F' : 'whitesmoke',
    visibility: isDisabled2 ? "hidden" : 'visible',
    }

    // for progress bar greying out each pertains to a bar

    const [isActive, setIsActive] = useState(true)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)
    
    // for image carousel

    const [count, setCount] = useState(0)
    const [currentImage, setImage] = useState(Image1)
    function chooseImage(number) {
        if (number == 0) {
            setImage(Image1)
            setIsDisabled(true)
            setIsActive(true)
            setIsActive2(false)
        } if (number == 1) {
            setIsActive(false)
            setIsActive2(true)
            setImage(Image2)
            setIsDisabled(false)
            setIsDisabled2(false)
            setIsActive3(false)
        } if (number == 2){
            setImage(Image3)
            setIsDisabled2(true)
            setIsActive2(false)
            setIsActive3(true)
        }
    }
    function incrementClick() {
        setCount(count + 1);
        chooseImage(count + 1);
    }
    function decrementClick() {
        setCount(count - 1);
        chooseImage(count - 1);
    }

    const barOne = {
    backgroundColor: isActive ? 'whitesmoke': '#808080',
    opacity: isActive ? '1' : '0.7',
    }

    const barTwo = {
    backgroundColor: isActive2 ? 'whitesmoke': '#808080',
    opacity: isActive2 ? '1' : '0.7',
    }

    const barThree = {
    backgroundColor: isActive3 ? 'whitesmoke': '#808080',
    opacity: isActive3 ? '1' : '0.7',
    }

    return (
        <div>
            <div className='carousel'>
                <button 
                    className='carousel-button left-button'
                    style={buttonStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={decrementClick}
                    disabled={count <= 0}
                    >&lt;</button>
                <div><img src={currentImage} /></div>
                <button 
                    className='carousel-button'
                    style={buttonStyle2}
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2} 
                    onClick={incrementClick}
                    disabled={count >= 2}
                    >&gt;</button>
            </div>
            <div className='progress-bar'>
                <div
                 style={barOne}
                 className='bar-one'></div>
                <div 
                style={barTwo}
                className='bar-two'></div>
                <div
                style={barThree}
                className='bar-three'></div>
            </div>
        </div>
    )
}

export default ImageCarousel;