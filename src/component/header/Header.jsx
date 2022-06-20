import React from 'react';
import CTA from './CTA';
import './header.css';
import ME from '../../assets/header.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id= 'home'>
      <div className="container header__container">
        <h5>Hello, i am</h5>
        <h1>Chinasa Ezerioha</h1>
        <h5 className="text-light">Front-end Web Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt='me'/>
         </div>

         <a href='#contact' className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header