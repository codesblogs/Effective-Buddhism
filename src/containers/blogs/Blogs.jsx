import React from 'react';      //rafce <- enter to get arrow function
import { Article } from '../../components';
import {buddha011, buddha012, buddha013, buddha014, buddha015 } from './imports';
import './blogs.css';
const Blogs = () => {
  return (
    <div className='<buddh__blog section__padding' id='blog'>
      <div className='buddh__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='buddh__blog-container'>
        <div className='buddh__blog-container_groupA'>
          <Article imgUrl={buddha011} date='May 14, 2023' title='Four Truths, Four Vows.' />
        </div>
        <div className='buddh__blog-container_groupB'>
          <Article imgUrl={buddha012} date='May 14, 2023' title='List of Buddha Claimants.'/>
          <Article imgUrl={buddha013} date='May 14, 2023' title='Core Buddhist Concepts.'/>
          <Article imgUrl={buddha014} date='May 14, 2023' title='The Buddha Journey.'/>
          <Article imgUrl={buddha015} date='May 14, 2023' title='Step towards towards Buddhism'/>
        </div>
      </div>
    </div>
  )
}

export default Blogs;
