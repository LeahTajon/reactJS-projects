import React from 'react'



export default function Travel(props) {
    return (
        <div className='travel'>
            <img className='travel--img' src={props.item.imgUrl} alt="Travel" width="125" height="168"/>
            <div className='travel-info'>
                <div className='travel-map'>
                    <img className='travel--icon' src='images/location-pin.png' alt='place' />
                    <h5 className='travel--country'>
                        {props.item.location}
                    </h5>
                    <a className='travel--map' href={props.item.googleMaps} target="_blank" rel="noopener noreferrer"> View on Google Maps</a>  
                </div>
                <h1 className='travel--title'>{props.item.title}</h1>
                <h4 className='travel--date'>{props.item.startDate} - {props.item.endDate}</h4>
                <p className='travel--desc'>
                {props.item.description}
                </p>
            </div>
        </div>
    
    )
}