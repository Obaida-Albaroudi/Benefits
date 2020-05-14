import './App.css';
import React from "react"
import { Jumbotron,Button,Card } from 'react-bootstrap'
import { checkPropTypes } from 'prop-types';
// colors=#080147 blue
// colors=#fa7268 pinkish
// colors=#6c757d grey
// colors=#151515 black

// logo="https://mistro.io/static/media/logo.68833b29.png"
// background="https://mistro.io/static/media/background-white.768ea084.svg"
let LinksDisplay=(props)=>{
  return (
    <Card style={{width:"30%", margin:"1%"}}>
    <Card.Header style={{background:"#fa7268", color:"white", fontWeight:"bold", textAlign:"center"}}>{props.title}</Card.Header>
    <Card.Body>
      <Card.Text style={{color:"#080147"}}>
      "{props.info}"
      </Card.Text>
      <a href={props.url} class="btn btn-primary btn-lg active" role="button" aria-pressed="true" target="_blank" style={{background:"#fa7268", border:"#fa7268"}}>Link</a>
    </Card.Body>
  </Card>
    
  );
}

export default LinksDisplay;

