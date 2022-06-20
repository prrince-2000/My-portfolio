import React from 'react';
import './about.css';
import ME from '../../assets/image_3(1).png';
import {FaAward} from 'react-icons/fa';
// import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='about me'/>
          </div>
        </div>

        <div className='about__content'>
            <div className="about__cards">
              <article className="about__card">
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>1+ year working</small>
              </article>

              {/* <article className="about__card">
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>50+ worldwide</small>
              </article> */}

              <article className="about__card">
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>3+ completed</small>
              </article>
            </div>
            <p>
              I am a young mind seeking to make a mark on the tech ecosystem, i take pleasure in coding /designing and problem solving on my IDE.  
            </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section >
  )
}

export default About