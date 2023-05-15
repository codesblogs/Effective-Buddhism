import React from 'react';      //rafce <= enter
import "./possibility.css";
import buddha02 from '../../assets/Buddha02.png'
const Possibility = () => {
  return (
    <div className="buddh__possibility section__padding" id="possibility">
      <div className='buddh__possibility-image'>
        <img src={buddha02} alt='possibility'/>
      </div>
      <div className='buddh__possibility-content'>
        <h4>Buddhism is a way of Life.</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>A few examples of parallel movements to the 10 precepts are:~ <br/> <br/>1. Not to engage in licentious acts or encourage others to do so.<br/>2. A monk is expected to abstain from sexual conduct entirely.<br/>3. Not to use false words and speech, or encourage others to do so.<br/>4. Not to trade or sell alcoholic beverages or encourage others to do so.<br/>5. Not to harbor anger or encourage others to be angry.</p>
        <h4>Click here to read more...</h4>
      </div>
    </div>
  )
}

export default Possibility 
