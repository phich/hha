import React, { Component } from 'react';
import { FormGroup,Form ,Button,InputGroupText,Input,Label,Col,Row,CardImg} from "reactstrap";
import logo from "../../assets/logo.png"
import {Redirect} from "react-router-dom";
import auth from "../../firebase/index";
import * as route from '../../constants/route'
import { AppToasterSuccess,AppToasterError } from "../common/toaster";
import {CheckLogin} from "../common/user";

class Login extends Component {
    constructor(props){
        super(props);
       this.state = {userName:"",password:"",redirect:false};
       
    }
    componentWillMount(){
            
    }
 
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onLogin(event){
        event.preventDefault();
        auth.signInWithEmailAndPassword(this.state.userName,this.state.password).then(function(){
            AppToasterSuccess.show({message:"Login success"})
            this.setState({redirect:true})
        }).catch(function(error) {
            AppToasterError.show({ message:error.message,icon :"warning-sign",
            className: "pt-intent-danger", })
          });
    }
    render() {
        if(this.state.redirect === true){
            return <Redirect to={route.HOME} ></Redirect>
        }
        return (
            <Form className="form-signin" onSubmit= {(event)=>this.onLogin(event)}>
                 <FormGroup row>
                <Col sm={2}/>
                <Col sm={8} className="text-center" >
                    <img src ={logo}/>
                    <h1 className="font-weight-normal">
                        Đăng Nhập
                    </h1>
                </Col>
                <Col sm={2}/>
                </FormGroup>
                <FormGroup row>
                    <Col >
                        <Input type="text" required placeholder ="User Name" name="userName" value={this.state.userName} onChange={(event)=>this.onChange(event)} />
                    </Col>
                
                </FormGroup>
                <FormGroup row>
                     <Col>
                        <Input type="password" required placeholder ="password" name = "password" value={this.state.password} onChange={(event)=>this.onChange(event)}/>
                     </Col>
                </FormGroup>
                <FormGroup check> 
                    <Label check>
                         <Input type="checkbox"/>
                         Remember me
                    </Label>  
                </FormGroup>
                <FormGroup row> 
                    <Col sm={6}>
                        <Button color="primary" block  type="submit">Login</Button>
                    </Col>
                    <Col sm={6}>
                        <Button color="primary" block onClick={()=>this.onLogin}>Register</Button>
                    </Col>
                </FormGroup>
            </Form>
            
        );
    }
}

export default Login;