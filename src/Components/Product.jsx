import React from 'react'
import './Product.css'
import spicedMint from '../assets/spiced-mint.png'
import sweetStrawberry from '../assets/sweet-strawberry.png'
import coolBlueberries from '../assets/cool-blueberries.png'
import juicyLemon from '../assets/juicy-lemon.png'
import productName from '../assets/product-name.png'
import fragrantCinnamon from '../assets/fragrant-cinnamon.png'
import summerCherries from '../assets/summer-cherries.png'
import cleanLavender from '../assets/clean-lavender.png'


const Product = () => {
  return (
    <section className='product-section'>
      <div className='product-header'>
        <h2>Products</h2>
        <p>Order it for you or for your beloved ones </p>
      </div>
        <div className='product-grid'>
          <div className='product-card'>
            <div className='product-img'><img src={spicedMint} alt="spiced-mint.png" /></div>
            <div className='product-info'><h3>Spiced Mint</h3><p>9.99$</p></div>
          </div>
          <div className='product-card'>
            <div className='product-img'><img src={sweetStrawberry} alt="sweet-strawberry.png" /></div>
            <div className='product-info'><h3>Sweet Strawberry</h3><p>9.99$</p></div>
          </div>
          <div className='product-card'>
            <div className='product-img'><img src={coolBlueberries} alt="cool-blueberries.png" /></div>
            <div className='product-info'><h3>Cool Blueberries</h3><p>9.99$</p></div>
          </div>
          <div className='product-card'>
            <div className='product-img'><img src={juicyLemon} alt="juicy-lemon.png" /></div>
            <div className='product-info'><h3>Juicy Lemon</h3><p>9.99$</p></div>
          </div>
          <div className='product-card'>
            <div className='product-img'><img src={productName} alt="product-name.png" /></div>
            <div className='product-info'><h3>Product name</h3><p>9.99$</p></div>
          </div>
          <div className='product-card'>
            <div className='product-img'><img src={fragrantCinnamon} alt="fragrant-cinnamon.png" /></div>
            <div className='product-info'><h3>Fragrant Cinnamon</h3><p>9.99$</p></div>
          </div>
          <div className='product-card'>
            <div className='product-img'><img src={summerCherries} alt="summer-cherries.png" /></div>
            <div className='product-info'><h3>Summer Cherries</h3><p>9.99$</p></div>
          </div>
          <div className='product-card'>
            <div className='product-img'><img src={cleanLavender} alt="clean-lavender.png" /></div>
            <div className='product-info'><h3>Clean Lavender</h3><p>9.99$</p></div>
          </div>
        </div>
    </section>
  )
}

export default Product