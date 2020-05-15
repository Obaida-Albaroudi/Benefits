
import './App.css';
import React from "react"
import AccordionData from "./AccordionData"
import "./Home.css"
import Links from "./Links"



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