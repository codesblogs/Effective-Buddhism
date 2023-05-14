import React from 'react';      
import './features.css';
import { Feature } from '../../components';

const featuresData = [{
  title: "Why the Buddha path is best?",
  text: "As anyone may observe from the outside, the most influential people in the world today are not Buddhists. On top of that anyone from a Non-Buddhist city, will tell you that they have not heard from a Buddhist about why that path is best. "
},
{
  title: "Ignorance led by communities.",
  text: "It is a sickness is the Buddha communities today to ignore the first vow, and try to move on to 2,3, and 4. By the very means of the vows, step 2 cannot be done without first completing step 1. Step 1 is in fact, an earthly desire. The Four Main Vows are a harmonious right of passage that must be balanced in action towards their completion."
},
{
  title: "Collective path towards enlightment.",
  text: "Therefore, the way of the Buddha should be to renounce all worldly desires IN ORDER TO save all people, and to learn all teachings, and that once these steps are completed perfect enlightenment will be attained. This means that these tasks are in harmony. As one renounces more wordy desires to spend more time saving people, one learns teachings to improve how they go about saving others, and rides the collective path towards enlightenment. "
},
{
  title: "Deviated to take real Buddha path",
  text: "Instead of following this path and order, Buddhists today are known as people continually meditating. Struggling to awaken and renounce all worldly desires, and instead all acting to each other like they are farther along the path."
}
]

const Features = () => {
  return (
    <div className='buddh__features section__padding' id='Buddha Path'>
      <div className='buddh__features-heading'>
        <h1 className='gradient__text'>“No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.”</h1>
        <p>~~ Gautam Buddha</p>
      </div>
      <div className='buddh__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features