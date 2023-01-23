import React from 'react';

import Contact from './Components/Contact'

import Cat1 from '../src/images/cat-1.jpg'
import Cat2 from '../src/images/cat-2.jpg'
import Cat3 from '../src/images/cat-3.jpg'
import Cat4 from '../src/images/cat-4.jpg'

function App() {
  return (
    <div className='contact'>
      <Contact 
        img={Cat1}
        name='Whiskerson'
        phone='(212) 555-1234'
        email='mr.whiskerson@catsnap.meow'
      />

      <Contact 
        img={Cat2}
        name='Fluffykins'
        phone='(212) 555-2345'
        email='fluff@me.com'
      />
      <Contact 
        img={Cat3}
        name='Felix'
        phone='(212) 555-4567'
        email='thecat@hotmail.com'
      />
      <Contact 
        img={Cat4}
        name='Pumpkin'
        phone='(0800) CAT KING'
        email='pumpkin@scrimba.com'
      />
    </div>
  );
}

export default App;
