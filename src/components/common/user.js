import React from 'react';
import { Redirect } from "react-router-dom";
import firebaseApp from "../../constants/firebaseConfig";


export const CheckLogin =()=>{
        var user = firebaseApp.auth().currentUser;
        debugger;
        if (user) {
           return <Redirect to ='/home'></Redirect>
        } else {
          // No user is signed in.
            return <Redirect to ='/login'></Redirect>
        }
  
 }

