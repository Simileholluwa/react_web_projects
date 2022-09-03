import React from 'react'
import './head.css'
import CTA from '../cta/cta'
import me from '../../assets/me.png'
import Socials from '../socials/socials'

const Head = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className='text--light'>
          Hello I'm
        </h5>
        <h1>
          Ajanaku Oluwatosin
        </h1>
        <h5 className="text--light">
          A Fullstack Mobile and Web Developer
        </h5>

        <CTA />
        <Socials />

        <div className="me">
          <img src={me} alt="Me"/>
        </div>
      </div>
    </header>
  )
}

export default Head