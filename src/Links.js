
import './App.css';
import React from "react"
import AccordionData from "./AccordionData"
import "./Home.css"
import {studies} from "./data"
import LinkdsDiplay from "./LinksDisplay"
// colors=#080147 blue
// colors=#fa7268 pinkish
// colors=#6c757d grey
// colors=#151515 black

// logo="https://mistro.io/static/media/logo.68833b29.png"
// background="https://mistro.io/static/media/background-white.768ea084.svg"
let Links=()=>{
  return (
    <>
    <h3 style={{textAlign:"center",color:"#6c757d"}}>Links To Studies & Highlights</h3>
    <div style={{display:"flex",flexDirection:"row", flexWrap:"wrap", justifyContent:"spaceAround"}}>
    {studies.map(i=>{
      return <LinkdsDiplay title={i.title} info={i.info} url={i.url}/>
    })

    }
    </div>
    </>
    
  );
}

export default Links;