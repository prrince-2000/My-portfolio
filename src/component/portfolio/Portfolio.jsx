import React from 'react';
import './portfolio.css';
import IMG from '../../assets/naira.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG} alt='naira'/>
          </div>
          <h3>Naira App</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com/prrince-2000/Naira-App' target="_blank"  rel="noreferrer"className='btn'>GitHub</a>
          <a href='https://naira-app.surge.sh/' className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio