import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';



export const Contact = () => {

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_thaa6be', 'template_7few98p', form.current, 'CKLzUcPwH_QEnfCzt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>  
      <h2>Contact</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>emprenderusinque@hotmail.com</h5>
              <a href='mailto:emprenderusinque@hotmail.com' target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>+57 3204067883</h5>
              <a href='https://api.whatsapp.com/send?phone=+573204067883' target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={ form } onSubmit={ sendEmail }>
          <input type="text" autoComplete='off' name="name" placeholder="Your Name" required/>
          <input type="email" autoComplete='off' name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section >
  )
}
