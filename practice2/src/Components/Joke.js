import React from 'react'

export default function Joke(props) {
    return (
        <div className='joke'>
            <h1>{props.setup}</h1>
            <h3>{props.punchline}</h3>
            <hr />
        </div>
    )
}