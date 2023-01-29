import React from 'react';

function App() {
  /*
    Challenge: Set up state to track our count (initial value is 0)
  */

  const [count, setCount] = React.useState(0)
  /*
    Note: if you ever need the old value of state to help you determine the new value of state, you should pass a callback function to your state setter function instead of using state directly. This callback function will receive the old value of state as its parameter, which you can then use to determine your new value of state.
  */
  function add() {
    setCount(prevCount => prevCount + 1)
  }

  function subtract() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div className='counter'>
      <button 
        className='counter--minus'
        onClick={subtract}>-</button>

      <div className='counter--count'>
        <h1>{count}</h1>
      </div>

      <button 
        className='counter--plus'
        onClick={add}>+</button>
    </div>
  )
}


export default App;







// PRACTICE #1

// import Joke from '../src/Components/Joke'
// import JokesData from './Components/JokesData';

// function App() {
//   const jokeElement = JokesData.map(joke => {
//     return <Joke 
//               setup={joke.setup} 
//               punchline={joke.punchline}/>
//   })
  
//   return (
//     <div>
//       {jokeElement}
//     </div>
//   );
// }


// PRACTICE #2

// function App() {
  /*
    Challenge:
    1. Create a function called 'handleClick' that runs setIsImportant("No")
    2. Add a click event listener to the div.state--value that runs 'handleClick' when the div is clicked.
  */


//    const [isImportant, setIsImportant] = React.useState("Yes")

//    function handleClick() {
//     setIsImportant("Huh?")
//    }
   
//    return (
//     <div className='state'>
//       <h1 className='state--title'>Is state important to know?</h1>
//       <div className='state--value' onClick={handleClick}>
//         <h1>{isImportant}</h1>
//       </div>
//     </div>
//    )
// }
