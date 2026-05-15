import React from 'react'
import './Footer.css'
import separator from '../assets/separator.png'
import logo from '../assets/logo.png'


const Footer = () => {
  return (
    <footer className='footer-desktop'>
      <div className='footer-widgets'>
        <div className='separator'>
          <img src={separator} alt="separator.png" />
        </div>
        <div className='footer-main-content'>
          <div className='footer-brand'>
            <div className='footer-logo-raw'>
              <img src={logo} alt="logo.png" />
            </div>
            <p className='footer-text'>
              Your natural candle made for <br /> your home and for your wellness.
            </p>
          </div>

          <div className='footer-links-grid'>
            <div className='footer-column'>
              <span className='column-header'>Discovery</span>
              <div className='footer-item'>New Seasons</div>
              <div className='footer-item'>Most Searched</div>
              <div className='footer-item'>Most Selled</div>
            </div>
            <div className='footer-column'>
              <span className='column-header'>About</span>
              <div className='footer-item'>Help</div>
              <div className='footer-item'>Shipping</div>
              <div className='footer-item'>Afiliate</div>
            </div>
            <div className='footer-column'>
              <span className='column-header'>Contact Us</span>
              <div className='footer-item'>Contact Us</div>
              <div className='footer-item'>Privacy Policies</div>
              <div className='footer-item'>Terms & Conditions</div>
            </div>
          </div>
        </div>
      </div>


      <div className='footer-bottom'>
        <div className='footer-bottom-content'>
          <span className='copyright'>©Candleaf All Rights Reserved.</span>
          <span className='designer'>Designed with ❤️ by uxbly</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer