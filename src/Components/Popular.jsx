import React from 'react'
import './Popular.css'
import spicedMint from '../assets/spiced-mint.png'
import sweetStrawberry from '../assets/sweet-strawberry.png'
import coolBlueberries from '../assets/cool-blueberries.png'
import juicyLemon from '../assets/juicy-lemon.png'


const Popular = () => {
  return (
    <section className="popular-section">
        <div className="popular-header">
          <h2>Popular</h2>
          <p>Our top selling product that you may like</p>
        </div>
        <div className="popular-grid">
          <div className='popular-card'>
            <div className='popular-img'><img src={spicedMint} alt="spiced-mint.png" /></div>
            <div className='popular-info'><h4>Spiced Mint</h4><p>9.99$</p></div>
          </div>
          <div className='popular-card'>
            <div className='popular-img'><img src={sweetStrawberry} alt="sweet-strawberry.png" /></div>
            <div className='popular-info'><h4 className="product-name">Sweet Strawberry</h4><p className="product-price">9.99$</p></div>
          </div>
          <div className='popular-card'>
            <div className='popular-img'><img src={coolBlueberries} alt="cool-blueberries.png" /></div>
            <div className='popular-info'><h4 className="product-name">Cool Blueberries</h4><p className="product-price">9.99$</p></div>
          </div>
          <div className='popular-card'>
            <div className='popular-img'><img src={juicyLemon} alt="juicy-lemon.png" /></div>
            <div className='popular-info'><h4 className="product-name">Juicy Lemon</h4><p className="product-price">9.99$</p></div>
          </div>
        </div>
    </section>
  )
}

export default Popular