import React from 'react'
// import Spline from '@splinetool/react-spline';
import './headers.css';
import buddha01 from '../../assets/buddha01.png';
import people from '../../assets/people.png';
const Headers = () => {
  return (
    <div className='buddh__header section__padding' id="home">
      <div className='buddh__header-content'>
        <h1 className='gradient__text'>Effective Buddhism</h1>
        <p>Buddhism is an amazing philosophy full of wisdom with great truths, however I believe Buddhists have lost the way of the Buddha and lack a real basis of impact. Effective Buddhism is a solution to those who seek to follow the Buddhist Path as Buddha Wanted. If Buddha was alive today, imagine the amount of change and impact he would be having.</p>
        <div className='buddh__header-content__input'>
          <input type="email" placeholder='Your email...' />
          <button type='button'>Get Started</button>
        </div>
        
        <div className='buddh__header-content__people'>
          <img src={people} alt='people'/>
          <p >2000+ people requested access a visit in last 24 hours!</p>
        </div>
      </div>
       <div className='buddh__header-image'>
          <img src={buddha01} alt='buddha' />
          {/* <Spline scene="https://prod.spline.design/KcrLsWgPA4Duy1PQ/scene.splinecode" /> */}
          {/* <Spline scene="https://prod.spline.design/KcrLsWgPA4Duy1PQ/scene.splinecode" /> */}
       </div>
    </div>
  )
}

export default Headers
