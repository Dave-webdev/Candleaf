import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero/Hero'
import Product from './Components/Product.jsx';
import Benefits from './Components/Benefits.jsx';
import Testimonials from './Components/Testimonials.jsx';
import Popular from './Components/Popular.jsx';
import Footer from './Components/Footer.jsx';


function App() {
  return ( 
    <div className='app-container'>
      <Navbar />
      <Hero />
      <Product />
      <Benefits />
      <Testimonials />
      <Popular />
      <Footer />
    </div>
  );
}

export default App;