import React from 'react'
import './Benefits.css'
import candleMockup from '../assets/candle_Mockup.png'
import candleMockup1 from '../assets/candle_Mockup 1.png'
import leaves from '../assets/leaves.png'

const Benefits = () => {
  const features = [
    { label: "Eco-sustainable", detail: "All recyclable materials, 0% CO2 emissions" },
    { label: "Hypoallergenic", detail: "100% natural, human friendly ingredients" },
    { label: "Handmade", detail: "All candles are craftly made with love." },
    { label: "Long burning", detail: "No more waste. Created for last long." },
  ];
  return (
    <section className='benefits-section'>
      <div className='content-container'>
        <div className='text-content'>
          <h2 className='main-title'>Clean and <br />fragrant soy wax</h2>
          <p className='description'>Made for your home and for your wellness</p>

          <div className="features-wrapper">
            {features.map((feature, index) => (
              <div key={index} className="feature-row">
                <div className="check-icon-container">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7" cy="7" r="6" stroke="black" strokeWidth="1.2"/>
                    <path d="M4 7L6 9L10 5" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="feature-text">
                  <span className="feature-label">{feature.label}:</span>
                  <span className="feature-detail"> {feature.detail}</span>
                </p>
              </div>
            ))}
          </div>
          <button className="learn-more-btn">Learn more</button>
        </div>
        <div className="image-content">
          <div className='Mockup-container'>
            <img src={leaves} alt="leaves.png" className='leaves-layer'/>
          </div>
          <div className='Mockup-container'>
            <img src={candleMockup1} alt="candle_Mockup 1.png" className='mockup-1'/>
          </div>
          <div className='Mockup-container'>
            <img src={candleMockup} alt="candle_Mockup.png" className='mockup-2'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits