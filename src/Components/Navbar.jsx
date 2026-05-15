import React from 'react'
import './Navbar.css'
import logo from '../assets/candleaf.png'
import vector from '../assets/Vector.png'
import cart from '../assets/Cart.png'
import vector2 from '../assets/Vector 2.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src={logo} alt="candleaf.png"  />
        </div>
      </div>
      <div className="nav-links">
        <div className='nav-items-with-arrow'>
          <a href="#discovery">Discovery</a>
          <span className="nav-separator">
            <img src={vector2} alt="Vector 2.png" />
          </span>
        </div>
        <div className='nav-items'><a href="#about">About</a></div>
        <div className='nav-items'><a href="#contact">Contact us</a></div>
      </div>
      <div className='nav-icons'>
        <span className="icon-link">
          <img src={vector} alt="Vector.png" />
        </span>
        <span className="icon-link">
          <img src={cart} alt="Cart.png" />
        </span>
      </div>
    </nav>
  )
}

export default Navbar