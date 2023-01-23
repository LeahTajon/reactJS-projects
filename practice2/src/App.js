import React from 'react';

import Joke from '../src/Components/Joke'

function App() {
  return (
    <div>
      <Joke 
        setup="Why did the tomato turn red?"
        punchline="Because it saw the salad dressing!"
      />
      <Joke 
        setup="What do you call a bear with no teeth?"
        punchline="A gummy bear!"
      />
      <Joke 
        setup="Why don't scientists trust atoms?"
        punchline="Because they make up everything!"
      />
      <Joke 
        setup="Why was the math book sad?"
        punchline="Because it had too many problems."
      />
      <Joke 
        setup="Why did the chicken cross the playground?"
        punchline="To get to the other slide."
      />
      
    </div>
  );
}

export default App;
