import React, { useRef }from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bz43myn', 'template_hxyrkfo', form.current, 'EHCV920bA-E3pt0_x')
    e.target.reset();
    
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
          
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>princewillchinasa4@gmail.com</h5>
              <a href='mailto:princewillchinasa4@gmail.com' target='_blank' rel='noreferrer'>send a message</a>
          </article>
          <article className="contact__option">
              <RiMessengerLine className='contact__option-icon'/>
              <h4>Messanger</h4>
              <h5>princewillchinasa</h5>
              <a href='https://m.me/princewill.chinasa' target='_blank' rel='noreferrer'>send a message</a>
          </article>
          <article className="contact__option">
              <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+2349079716643</h5>
              <a href='https://api.whatsapp.com/send?phone=09079716643' target='_blank' rel='noreferrer'>send a message</a>
          </article>
        </div>
        {/* /* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='your full name' required/>
          <input type='email' name='email' placeholder='your email' required/>
          <textarea name='message' rows='7' placeholder='your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact