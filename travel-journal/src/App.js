import React from 'react'
import NavBar from './Components/NavBar'
import Travel from  './Components/Travel'

import data from './data';

function App() {
  const dataElement = data.map(item => {
    return <Travel item = {item} />
  })
  return (
    <div className="app">
      <section>
        <NavBar />
      </section>
      <section>
        {dataElement}
      </section>
    </div>
  );
}

export default App;
