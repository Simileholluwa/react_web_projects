import React from 'react'
import Navbar from './navbar'
import Cards from './card'
import Data from '../Data'
import headerImage from '../images/Group 77.png'

export default function Head(){

    const card = Data.map((elements) => {
        return (
        <Cards 
            key = {elements.id}
            {...elements}
        />
        )
    })

    return (
        <header>
            <Navbar />
            <div className='header--content'>
                <div className='left--header'>
                    <div className='image'>
                    <img src={headerImage} alt=''/>
                    </div>
                   
                </div >
                <div className='right--header'>
                    <h3>
                        Online Experiences
                    </h3>
                    <p>
                        Join unique interactive activities led by one-of-a-kind hosts - without leaving your home.
                    </p>
                    {card}
                </div>
            </div>
            

        </header>
    )
}