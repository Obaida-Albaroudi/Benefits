import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Home"
import { Accordion } from 'react-bootstrap';

function App() {
  return (
    <div className="app-background">
      <p style={{marginLeft: "-50px"}}>
       <img src="https://mistro.io/static/media/logo.68833b29.png" alt="logo" height="50px" />
        </p>
    <h1 style={{color:"#fa7268",fontWeight:"bold"}}>Let's Talk Benefits & Perks!</h1>
    <Home/>
    </div>
  );
}

export default App;
