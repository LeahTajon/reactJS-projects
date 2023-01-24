import React from 'react';

import star from '../images/star.png';

export default function Card(props) {
    return (
        <div className='Card'>
            <img src={props.img} alt='Katie Zaferes'/>
            <div className='card--stats'>
                <img className="card--star" src={star} alt="pink star" />
                <span> {props.rating} </span>
                <span className='gray'>({props.reviewCount}) • </span>
                <span className='gray'>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From {props.price}</span> / person</p>
        </div>
    );
}