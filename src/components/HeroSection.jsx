import React from 'react';
import '../App.css';
import {Button} from './Button';
import '../assets/CSS/HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='videos/HD_Digits_Red.mp4' autoPlay loop muted/>
            
            <h1>Develop Your Skills</h1>
            <p>What are you waiting for?</p>
            <div className= "hero-btns">
                <Button 
                className='btns'
                buttonStyle='btn--primary' 
                buttonSize='btn--large'
                >
                Quizzes  <i className='fas fa-tasks'/>
                </Button>
                </div>
                
            
        </div>
    )
}

export default HeroSection;