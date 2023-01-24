import React from "react";


import NavBar from "./Components/NavBar";
//import Hero from "./Components/Hero";
import Card from "./Components/Card";

import katiePhoto from './images/katie-zaferes.png';

function App() {
  return (
    <div>
      <NavBar />
      {/* <Hero /> */}
      <Card 
        img={katiePhoto}
        rating="5.0"
        reviewCount={6}
        country='USA'
        title='Life Lessons with Katie Zaferes'
        price={136}
      />
      
    </div>
  );
}

export default App;
