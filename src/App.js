import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
import RoutersConfig from "./components/common/routerConfig";
import Header from './components/layout/header';
import firebase from "firebase";

class App extends Component {
  render() {
    return (
        <RoutersConfig/>
    );
  }
}

export default App;
