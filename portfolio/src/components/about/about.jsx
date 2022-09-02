import React from 'react'
import './about.css'
import me from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5> Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

      <div className="about__me">
        <div className="about__me__image">
          <img src={me} alt="About me" />
        </div>
      </div>

      <div className="about__contact">
        <div className="about__cards">
          <article className="about__tag">
            <FaAward className='about__icon' />
            <h5>
              Experience
            </h5>
            <small>
              3+ years 
            </small>
          </article>

          <article className="about__tag">
            <FiUsers className='about__icon' />
            <h5>
              Clients
            </h5>
            <small>
              10+ worldwide
            </small>
          </article>

          <article className="about__tag">
            <VscFolderLibrary className='about__icon' />
            <h5>
              Projects
            </h5>
            <small>
              30+ completed
            </small>
          </article>

        
        </div>
        <p>
            I build fully functional, responsive and interactive websites and
            mobile applications. My websites are built using ReactJS framework
            and my Mobile applications are developed using the Flutter framework.
          </p>

          <a href="#contact" className='btn--primary'>Let's Talk</a>
      </div>

      </div>
    </section>
  )
}

export default About