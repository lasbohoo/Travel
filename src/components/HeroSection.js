import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import { FaPlayCircle } from "react-icons/fa";
import second from '../Videos/second.mp4';

export const HeroSection = () => {
  return (
    <div className='hero-container'>
        <video autoPlay loop muted>
          <source src={second} type='video/mp4' />
        </video>
        <h1>ADVENTURE AWAITS </h1> 
        <p>What are you waiting for?</p>
        <div className='hero.btn'>
            <Button className='btns' buttonStyle='btn--outline'
            buttonStle='btn--large'>GET STARTED</Button>
        </div>
        <div className='hero.btn'>
            <Button className='btns' buttonStyle='btn--primary'
            buttonStle='btn--large'>WATCH TRAILER <FaPlayCircle className='playcircle'/> </Button>
        </div>
    </div>
  );
};


