import React from 'react';
import './footer.css';
import {FaFacebook} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <a href='footer' className='footer__logo'>PRINCEWILL</a>

      <ul className="permalinks">
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>about</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.facebook.com/princewill.chinasa/' target='_blank' rel='noreferrer'><FaFacebook/></a> 
        <a href='https://www.instagram.com/chinasa_00/?hl=en' target='_blank' rel='noreferrer'><FiInstagram/></a>
        <a href='https://www.instagram.com/chinasa_00/?hl=en' target='_blank' rel='noreferrer'><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;{year} PRINCEWILL. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer