import React from 'react'

export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? '#222' : 'transparent'
    }

    // function toggle() {
    //     setOn(prevOn => !prevOn)
    // }

    return (
        <div>
            <div 
                style={styles} 
                className='box' 
                onClick={()=>props.toggle(props.id)}> 
            </div>
        </div>
    )
}