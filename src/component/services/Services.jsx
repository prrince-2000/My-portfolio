import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creative designs, well structured and easily readable codes.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Effient team play and colaboration.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Good listening and communication skills.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Excellent research skills.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services