import React from 'react';

import Joke from '../src/Components/Joke'
import JokesData from './Components/JokesData';

function App() {
  const jokeElement = JokesData.map(joke => {
    return <Joke 
              setup={joke.setup} 
              punchline={joke.punchline}/>
  })
  
  return (
    <div>
      {jokeElement}
    </div>
  );
}

export default App;
