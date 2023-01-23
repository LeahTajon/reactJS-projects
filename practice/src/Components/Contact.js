import React from 'react'

import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

//import Cat1 from '../images/cat-1.jpg'
//import Cat2 from '../images/cat-2.jpg'
//import Cat3 from '../images/cat-3.jpg'
//import Cat4 from '../images/cat-4.jpg'

export default function Contact(props) {
    return (
        <div>
            <div className='contact-card'>
                <img 
                    className='contact--image' src={props.img} 
                    alt='Brown cat'
                />
                <h3 className='contact--name'>{props.name}</h3>
                <div className='info-group'>
                    <p><FaPhone /> {props.phone}</p>
                </div>
                <div className='info-group'>
                    <p><FaEnvelope /> {props.email}</p>
                </div>    
            </div>

           
        </div>
        
    )
}

