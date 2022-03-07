import React from 'react'
import { data } from './data';
import './portfolio.css';

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map( ({ id, title, image, github, demo }) => (
            <article key={ id }className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={ image } alt={ title } />
              </div>
              <div className='portfolio__item-cta'>
                <h3>{ title }</h3>
                <a href={ github } target="_blank" className='btn'>Github</a>
                <a href={ demo } target="_blank" className='btn btn-primary' >Live Demo</a>
              </div>
            </article>
          ))
        }

      </div>
    </section>
  )
}
