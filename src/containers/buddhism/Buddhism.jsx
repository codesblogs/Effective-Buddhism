import React from 'react'
import './buddhism.css';
import { Feature } from '../../components';

const Buddhism = () => {
  return (
<div className= 'buddh__buddhism section__margin' id='Buddhism'>
      <div className='buddh__buddhism-feature'>
        <Feature title='What is Buddhism?' text='In current Buddhist society, the top Buddhist role models have iron wills, but lack real ACTION or PURPOSE behind this because of a misinterpretation of Dharma. Buddha’s four main vows tell a different story of how the Buddha should act.' />
      </div>
      <div className='buddh__buddhism-heading'>
        <h1 className='gradient__text'>The Bodhisattva Vows exist in many different forms; they are chanted as follows:</h1>
        <p>Explore The Buddhism</p>
      </div>
      <div className='buddh__buddhism-container'>
        <Feature title='Buddha Chants' text='1. Creations are numberless, I vow to free them.  2. Delusions are inexhaustible, I vow to transform them. 3. Reality is boundless, I vow to perceive it. 4. The awakened way is unsurpassable, I vow to embody it.'/>
        <Feature title='Buddha Chants' text='1. Living beings are limitless, I vow to liberate them all. 2. Blind passions are limitless, I vow to sever them all. 3. Dharma gates are inexhaustible, I vow to know them all. 4. Unsurpassed is awakening, I vow to realize it.'/>
        <Feature title='Buddha Chants in laymen term' text='1. To save all people. 2. To renounce all worldly desires. 3. To learn all teachings. 4. To attain perfect enlightenment'/>
      </div>
    </div>
  )
}

export default Buddhism;
