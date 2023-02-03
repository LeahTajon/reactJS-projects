import React from 'react'
import boxes from './Components/boxes'
import Box from './Components/Box'

export default function App() {
  const [squares, setSquares] = React.useState(boxes)

  function toggle(id) {
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === id ? {...square, on: !square.on} : square
      })
    })
  }

  let squareElements = squares.map(item => (
    <Box 
      key={item.id}
      id={item.id} 
      on={item.on} 
      toggle={toggle}/>
  ))

  
  return (
    <main>
      {squareElements}
    </main>
  )
}