import React from 'react'

export default function Star(props) {
    let starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"

    return (
        <img 
            src={`images/${starIcon}`}
            alt='icon'
            className="card--favorite"
            onClick={props.handleClick}
        />
    )
}