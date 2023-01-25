import React from "react";


import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";

import data from "./data"


function App() {
  const cards = data.map(data => {
    return <Card
              key={data.key} 
              data={data}
            />
  })
  return (
    <div>
      <NavBar />
      <Hero /> 
      
      <section className="card-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
