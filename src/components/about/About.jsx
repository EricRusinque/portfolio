import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import { FaAward } from  'react-icons/fa'
import { VscFolderLibrary } from  'react-icons/vsc'
export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About me image" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>2+ Years Working</small>
              </article>
              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Personal Projects</h5>
                <small>5+ Completed</small>
              </article>
            </div>
            <p>
            I am a Web Developer passionate about technology, I have 2 years of experience in the world of development. I specialize in the web part with React Js (Using libraries like Redux). I have been working on projects with Node JS with Express for about half a year, with less experience in this technology, but always open to learning. I like to work in a team and with the ability to adapt to the work environment.
            </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}
