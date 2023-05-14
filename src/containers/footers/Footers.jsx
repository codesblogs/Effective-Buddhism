import React from 'react'
import './footers.css'
import logo from '../../assets/logo.png';
const Footers = () => {
  return (
    <div className="buddh__footer section__padding">
      <div className="buddh__footer-heading">
        <h1 className='gradient__text'>The Buddha Marg: A way of Life. </h1>
      </div>
      <div className="buddh__footer-btn">
        <p>Contact me</p>
      </div>
      <div className='buddh__footer-links'>
        <div className='buddh__footer-links_logo'>
          <img src={logo} alt='logo'/>
          <p>A website prepared by Abhishek Kumar.</p>
        </div>
        <div className='buddh__footer-links_div'>
          <h4>Links</h4>
          <p>INDIA</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='buddh__footer-links_div'>
          <h4>Abhishek(@bhi)</h4>
          <p>Contact</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className='buddh__footer-links_div'>
          <h4>Get in touch</h4>
          <p>oye_its.abhi</p>
          <p>097-5282-6551</p>
          <p>abhishekkumar10jan1999@gmail.com</p>
        </div>
      </div>
      <div className='buddh__footer-copyright'>
        <p>© 2023 Abhishek Kumar 😍😍</p>
      </div>
    </div>
  )
}

export default Footers;
