import React from 'react';
import './App.css';
import {Route, Switch  } from "react-router-dom";
import  Home  from "./pages/home.js";
import  Rooms  from "./pages/room.js";
import  SingleRoom  from "./pages/single.js";
import Error from "./pages/error.js";
import Navbar from "./components/Navbar.js";
function App(){ 
  

  return (
    <>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/rooms" component={Rooms}/>
    <Route exact path="/rooms/:slug" component={SingleRoom}/>
    <Route component={Error}/>
    </Switch> 
    </>
  );
  }

export default App;
