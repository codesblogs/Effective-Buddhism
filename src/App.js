// import Spline from '@splinetool/react-spline';
import React from 'react'
import './App.css';
import  { Blogs, Buddhism, Features, Possibility, Headers, Footers }  from './containers';
import { Brand, CTA, Navbar } from './components';
import Articlepost from './containers/articlepost/Articlepost';
const App = () => {
  return (
    <div className="App">
      {/* <Spline scene="https://prod.spline.design/KcrLsWgPA4Duy1PQ/scene.splinecode" /> */}
      <div className='gradient__bg'>
        <Navbar />
        <Headers />
      </div>
      <Brand />
      <Buddhism/>
      <Features/>
      <Possibility/>
      <CTA />
      <Blogs/>
      <Articlepost />
      {/* <Animation /> */}
      <Footers />
    </div>
  );
}

export default App


// THis projects is made by Abhishek Kumar(abhi) 