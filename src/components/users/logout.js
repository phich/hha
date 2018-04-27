import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import firebaseApp from "../../constants/firebaseConfig";
import {Spinner} from "@blueprintjs/core"
class logout extends Component {
    constructor(props){
        super(props)
        this.state ={ redirect:false}
    }
    componentWillMount(){
        console.log("componentWillMount");
        firebaseApp.auth().signOut().then(()=>{
            this.setState({redirect :true});
        })
    }
    render() {
        if (this.state.redirect === true){
            return <Redirect to='/login'></Redirect>
        }   
        return (
           <div>
              <h3>logout</h3>
              <Spinner></Spinner>
           </div>
        );
    }
}

export default logout;