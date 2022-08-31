import React from 'react'
import Logo from '../images/logo.svg'

export default function Navbar(){
    return (
        <nav>
            <img src={Logo} alt='' className='logo'/>
        </nav>
    )
}