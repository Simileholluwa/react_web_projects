import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='header__socials'>
        <a href="https://likedin.com" target="_blank" rel="noopener noreferrer"> 
            <BsLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"> 
            <FaGithub />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <BsFacebook /> 
        </a>
    </div>
  )
}

export default Socials