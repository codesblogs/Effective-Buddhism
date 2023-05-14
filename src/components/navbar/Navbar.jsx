import React from 'react'
import './navbar.css';
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';    //importing icons
import logo from '../../assets/logo.png';

// <Menu />  will help to call this Menu()
const Menu = () => (
    <>        {/* <>...</>  wrap in react fragment */}
    <p><a href="#home">Home</a></p>
    <p><a href="#buddha">Buddhism</a></p>
    <p><a href="#possibility">Buddha path</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
    </>
  )

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false); // after importing usestate hook
  return (
    <div className='buddh__navbar'>
      <div className='buddh__navbar-links'>
        <div className='buddh__navbar-links_logo'>
            <img src={logo} alt="logo" />
        </div>
        <div className='buddh__navbar-links_container'>
            <Menu />
          </div>
      </div>
      <div className='buddh__navbar-sign'>
          <p>Sign in</p>
          <button type="button">Sign up</button>
      </div>
      {/* now to add Mobile-Responsive we require to add new div & use toggleMenu */}
      <div className="buddh__navbar-menu"> 
          { toggleMenu 
            ? <RiCloseLine color="#fff" sizee={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" sizee={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className="buddh__navbar-menu_container scale-up-canter">
              <div className="buddh__navbar-menu_conatiner-links">
                <Menu /> {/* calling Menu() under mob responsiveness*/}
               <div className='buddh__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type="button">Sign up</button>
               </div> 
              </div>
            </div>
          )}
        </div>
    </div>
  )
}

export default Navbar;
