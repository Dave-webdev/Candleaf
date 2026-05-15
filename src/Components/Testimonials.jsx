import React from 'react'
import './Testimonials.css'
import testimonialBg from '../assets/testimonial-bg.png'
import star1 from '../assets/star 1.png'
import star2 from '../assets/star 2.png'
import star3 from '../assets/star 3.png'
import star4 from '../assets/star 4.png'
import star5 from '../assets/star 5.png'
import star6 from '../assets/star 6.png'
import testimonialBg1 from '../assets/testimonial-bg1.png'
import testimonialBg2 from '../assets/testimonial-bg2.png'


const Testimonials = () => {
  return (
   <section className="testimonials-section">
      <div className="testimonials-header">
        <h2 className="testimonials-title">Testimonials</h2>
        <p className="testimonials-subtitle">Some quotes from our happy customers</p>
      </div>
      <div className='testimonial-grid'>
        <div className='testimonial-card'>
          <div className='cards-testimonials'>
            <img src={testimonialBg} alt="testimonail-bg.png" />
          </div>
          <div className="stars-container">
            <img src={star1} alt="star 1.png" />
            <img src={star2} alt="star 2.png" />
            <img src={star3} alt="star 3.png" />
            <img src={star4} alt="star 4.png" />
            <img src={star5} alt="star 5.png" />
          </div>
          <div className='testimonial-title'>
            <h4 className='testimonial-text'>“I love it! No more air <br />fresheners”</h4>
          </div>
          <div className='testimonial-author'>
            <p className='author-name'>Luisa</p>
          </div>
        </div>
        <div className='testimonial-card'>
          <div className='cards-testimonials'>
            <img src={testimonialBg1} alt="testimonial-bg1.png" />
          </div>
          <div className='stars-container'>
            <img src={star1} alt="star 1.png" />
            <img src={star2} alt="star 2.png" />
            <img src={star3} alt="star 3.png" />
            <img src={star4} alt="star 4.png" />
            <img src={star6} alt="star 6.png" />
          </div>
          <div className='testimonial-title'>
            <h4 className='testimonial-text'>“Recommended for <br />everyone”</h4>
          </div>
          <div className='testimonial-author'>
            <p className='author-name'>Eduardo</p>
          </div>
        </div>
        <div className='testimonial-card'>
          <div className='cards-testimonials'>
            <img src={testimonialBg2} alt="testimonial-bg2.png" />
          </div>
          <div className='stars-container'>
            <img src={star1} alt="star 1.png" />
            <img src={star2} alt="star 2.png" />
            <img src={star3} alt="star 3.png" />
            <img src={star4} alt="star 4.png" />
            <img src={star5} alt="star 5.png" />
          </div>
          <div className='testimonial-title'>
            <h4 className='testimonial-text'>“Looks very natural, the <br />smell is awesome”</h4>
          </div>
          <div className='testimonial-author'>
            <p className='author-name'>Mart</p>
          </div>  
        </div>
      </div>
    </section>
  )
}

export default Testimonials