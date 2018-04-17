import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button,Form,Label,Input,FormGroup } from "reactstrap";
import Map from './components/map'
class App extends Component {
  render() {
  
    return (
       <div className="App">
       <Map  
       zoom ={10}
       center={{lat: 21.0227788,lng: 105.8194541 }}
       containerElement={<div style={{ height: `400px` }} />}
       mapElement={<div style={{ height: `100%` }} />}/>
        <Form>
          <FormGroup className="col-lg-4">
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
         </FormGroup>
        </Form>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
