import React from 'react';
import '../App.css';
import {Button} from './Button';
import '../assets/CSS/HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='../assets/videos/video-2.mp4' autoPlay loop muted/>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className= "hero-btns">
                <Button 
                className='btns'
                buttonStyle='btn--outline' 
                buttonSize='btn--large'
                >
                 Beginner Tutorials
                </Button>
                <Button 
                className='btns'
                buttonStyle='btn--primary' 
                buttonSize='btn--large'
                >
                Explore Challenges <i className='fas fa-tasks'/>
                </Button>
                </div>
            
        </div>
    )
}

export default HeroSection;