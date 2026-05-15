import React from 'react'
import './Hero.css'
import logo from "../../assets/hero-title.png";
import bgImage from '../../assets/bg-image.png'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <img src={bgImage} alt="bg-image.png" className="hero-bg" />
      </div>
      <div className="hero-card">
        <img src={logo} alt="hero-title.png" />
        <p className="card-text">All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments.</p>
        <button className="btn-primary">Discovery our collection</button>
      </div>
    </section>
  )
}

export default Hero