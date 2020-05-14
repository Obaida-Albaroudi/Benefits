import React, {Component} from 'react'
// import {Accordion,Card} from 'react-bootstrap'
import {InformationData} from "./data"
import  Dropdown from "./Dropdown"



const AccordionData = () => {
  return(
    <div style={{marginLeft:"0%"}}>

      {InformationData.map((i)=> {
        return <Dropdown key={i.id} title={i.title} info={i.info}/>
    })}
      
    </div>
  )
  }

export default AccordionData

