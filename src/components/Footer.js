import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaTypo3 } from "react-icons/fa";

const fontStyle = {
    marginLeft: '0.5rem',
    fontSize: '1.8rem',
  }

const Footer = () => {
  return (
    <div className='footer-container'>
        <section className='footer-sub'>
            <p className='footer-sub-heading'>
                Join the Adeventure newsletter to receive our best vacation deals
            </p>
            <p className='footer-sub-text'>
                You can unsubcribe at any time.
            </p>
            <div className='input-areas'>
                <input type='email' name='email' placeholder='Your Email' className='footer-input' />
                <Button buttonStyle='btn-outline'>Subscribe</Button>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Sevices</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Sevices</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Sevices</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Sevices</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Sevices</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Sevices</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='footer-logo'>
                <Link to='/' className='social-logo'>
                    TRVL <FaTypo3 className={fontStyle}/>
                </Link>
            </div>
            <small className='website'>TRVL @ 2020</small>
        </section>
    </div>
  )
}

export default Footer