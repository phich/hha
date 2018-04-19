import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button,Form,Label,Input,FormGroup } from "reactstrap";
import Map from './components/map'
import FontAwesome  from 'react-fontawesome'
import Index from "./components/index";
import { Route,Router } from "react-router";
import Login from './components/users/login';
import register from "./components/users/register";
class App extends Component {
  render() {
  
    return (
      <Router>
        <Route path={"login"}/>
        <Route path={"register"}/>
      </Router>
    );
  }
}

export default App;
