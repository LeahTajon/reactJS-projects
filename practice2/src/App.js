import React from 'react';
import Star from './Components/Star'
//import Count from './Components/Count'


export default function App() {
  const [contact, setContact] = React.useState({
      firstName: 'Jane',
      lastName: 'Doe',
      phone: '+1 (719) 555-1212',
      email: 'itsmyrealname@example.com',
      isFavorite: false
   })

   function toggleFavorite() {
    setContact(prevState => ({
      ...prevState,
      isFavorite: !prevState.isFavorite
    }))
   }

   return (
     <main>
       <article className='card'>
           <img 
             src='images/user-photo.png' 
             alt='avatar'
             className='card--image'
            />
           <div className='card--info'>
             {/* <img
               src={`images/${starIcon}`}
               alt='empty star icon'
               className='card--favorite'
               onClick={toggleFavorite}
             /> */}
             <Star 
                isFilled={contact.isFavorite} 
                handleClick={toggleFavorite}/>
             <h2 className='card--name'>
               {contact.firstName} {contact.lastName}
             </h2>
            <p className='card--contact'>{contact.phone}</p>
             <p className='card--contact'>{contact.email}</p>
           </div>
          
       </article>
     </main>
   )
 }





// ************** PRACTICE #1 *******************

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


// ************** PRACTICE #2 ***************************

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


// ************** PRACTICE #3 ***************************

// function App() {

//     Challenge: Set up state to track our count (initial value is 0)


//   const [count, setCount] = React.useState(0)

//     Note: if you ever need the old value of state to help you determine the new value of state, you should pass a callback function to your state setter function instead of using state directly. This callback function will receive the old value of state as its parameter, which you can then use to determine your new value of state.

//   function add() {
//     setCount(prevCount => prevCount + 1)
//   }

//   function subtract() {
//     setCount(prevCount => prevCount - 1)
//   }

//   return (
//     <div className='counter'>
//       <button 
//         className='counter--minus'
//         onClick={subtract}>-</button>

//       <div className='counter--count'>
//         <h1>{count}</h1>
//       </div>

//       <button 
//         className='counter--plus'
//         onClick={add}>+</button>
//     </div>
//   )
// }

// ************** PRACTICE #4 ***************************

// function App() {
//   const [isGoingOut, setIsGoingOut] = React.useState(true)

//   function changeMind() {
//     setIsGoingOut(prevState => !prevState)
//   }

//   return (
//     <div className='state'>
//         <h1 className='state--title'>Do I feel like going out tonight?</h1>
//         <div className='state--value' onClick={changeMind}>
//           <h1>{isGoingOut ? "Yes" : "No"}</h1>
//         </div>
//     </div>

//   )
// }


// ************** PRACTICE #5 ***************************

// function App() {
  
//     Challenge: Convert the code below to use an array
//     held in state instead of a local variable. Initialize
//     the state array with the same 2 items below.

//     Don't worry about fixing 'addItem' quite yet.
  
//     const [thingsArray, setThingsArray] = React.useState(['Thing 1', 'Thing 2'])

//     function addItem() {
//       setThingsArray(prevThingsArray => [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`])
//     }

//     const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
//     return (
//       <div>
//         <button onClick={addItem}>Add Item</button>
//         <p>{thingsElements}</p>
//       </div>
//     )
// }


// ************** PRACTICE #6 ***************************

// function App() {
//   const [contact, setContact] = React.useState({
//       firstName: 'Joe',
//       lastName: 'Doe',
//       phone: '+1 (719) 555-1212',
//       email: 'itsmyrealname@example.com',
//       isFavorite: true
//   })

//   let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"

//   function toggleFavorite() {
//     setContact(prevState => ({
//       ...prevState,
//       isFavorite: !prevState.isFa
//     }))
//   }

//   return (
//     <main>
//       <article className='card'>
//           <img 
//             src='images/user-photo.png' 
//             alt='avatar'
//             className='card--image'
//           />
//           <div className='card--info'>
//             <img
//               src={`images/${starIcon}`}
//               alt='empty star icon'
//               className='card--favorite'
//               onClick={toggleFavorite}
//             />
//             <h2 className='card--name'>
//               {contact.firstName} {contact.lastName}
//             </h2>
//             <p className='card--contact'>{contact.phone}</p>
//             <p className='card--contact'>{contact.email}</p>
//           </div>
          
//       </article>
//     </main>
//   )
// }

// ************** PRACTICE #7 ***************************

//function App() {

  //Challenge: Set up state to track our count (initial value is 0)
  
  
  //const [count, setCount] = React.useState(0)
  //Note: if you ever need the old value of state to help you determine the new value of state, you should pass a callback function to your state setter function instead of using state directly. This callback function will receive the old value of state as its parameter, which you can then use to determine your new value of state.
  
  //   function add() {
  //     setCount(prevCount => prevCount + 1)
  //   }
  
  //   function subtract() {
  //     setCount(prevCount => prevCount - 1)
  //   }
  
  //    return (
  //       <div className='counter'>
  //        <button 
  //          className='counter--minus'
  //          onClick={subtract}>-</button>
  
  //       <Count number={count} />
  
  //        <button 
  //          className='counter--plus'
  //          onClick={add}>+</button>
  //      </div>
  //    )
  //  }
  
  // export default App;
  
  /* <div className='counter--count'>
           <h1>{count}</h1>
         </div> */
  