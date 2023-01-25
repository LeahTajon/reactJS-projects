import React from 'react';

import star from '../images/star.png';

export default function Card(props) {
    let badgeText
    if (props.data.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.data.country === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className='card'>
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img className='card--image' src={props.data.img} alt='Card'/>
            <div className='card--stats'>
                <img className="card--star" src={star} alt="pink star" />
                <span> {props.data.stats.rating} </span>
                <span className='gray'>({props.data.stats.reviewCount}) • </span>
                 <span className='gray'>{props.data.location}</span>
            </div>
            <p className='card--title'>{props.data.title}</p>
            <p><span className='bold'>From {props.data.price}</span> / person</p>
           
        </div>
    );
}