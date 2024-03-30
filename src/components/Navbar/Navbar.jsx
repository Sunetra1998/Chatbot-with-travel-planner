import React, { useState } from 'react'
import './Navbar.scss';
import { BiLogoTumblr } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { Link } from 'react-router-dom';
import SignUp from '../SignUp/SignUp';

const Navbar = () => {
  // STATE TO TRACK AND UPDATE NAVBAR
  const [navBar, setNavBar] = useState('menu');
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Function to show navbar
  const showNavBar = () => {
    setNavBar('menu showNavbar');
  }
  const removeNavBar = () => {
    setNavBar('menu');
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
};

const handleCloseModal = () => {
    setIsModalOpen(false);
};

  return (
    <div className='navBar'>
      <div className='logoDiv'>
        <Link to="/">
        <BiLogoTumblr className='icon' />
        <span>RAVEL-Planner</span>
        </Link>
       
      </div>
      <div className={navBar}>
        <ul>

          <li className='navList'> <Link to="/destination">Destination</Link></li>


          <li className='navList'> <Link to="/about">About Us  </Link></li>

          {/* <li className='navList'>Testimonial</li> */}

          <li className='navList'>  <Link to="/gallery">Gallery</Link></li>
        </ul>
        {/* Icon To Remove Navbar */}
        <AiFillCloseCircle className='icon closeIcon' onClick={removeNavBar} />
      </div>
      <button className="signInBtn btn" onClick={handleOpenModal}>Sign Up</button>
      
      {/* Icon to toggle Navbar */}
      <PiDotsNineBold className='icon menuIcon' onClick={showNavBar} />

      {isModalOpen && <SignUp  handleCloseModal={handleCloseModal} />}
    </div>
  )
}

export default Navbar