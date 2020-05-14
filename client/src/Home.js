
import './App.css';
import React from "react"
import AccordionData from "./AccordionData"
import "./Home.css"
import Links from "./Links"
// colors=#080147 blue
// colors=#fa7268 pinkish
// colors=#6c757d grey
// colors=#151515 black

// logo="https://mistro.io/static/media/logo.68833b29.png"
// background="https://mistro.io/static/media/background-white.768ea084.svg"
let Home=()=>{
  return (
    <div style={{flexDirection:"column"}}>
    <div className="home-background">
    <AccordionData/>
    </div>
    <Links/>
    </div>
  );
}

export default Home;