import React from 'react'

export default function Cards(props){
    return (
        <div className="card">
            <img src={`../images/${props.coverImg}`} className="card--image" alt=''/>
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" alt=''/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount})</span>
                <span className="gray">•{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}