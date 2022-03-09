import './languages.css'
import React, { useContext } from 'react'
import { langContext } from '../../context/langContext'
import US from '../../assets/us.png'
import ES from '../../assets/es.png'
export const Languages = () => {

  const { setLanguage } =  useContext( langContext );

  return (
    <div className='languages__container'>
        <button onClick={ () => setLanguage('es-MX')} >
            <img src={ ES } alt="spanish" />
        </button>
        <button onClick={ () => setLanguage('en-US')} >
            <img className='us__language' src={ US } alt="english" />
        </button>
    </div>
  )
}
