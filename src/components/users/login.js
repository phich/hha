import React, { Component } from 'react';
import { FormGroup,Form ,Button,InputGroupText,Input,Label,Col,Row,CardImg} from "reactstrap";
import logo from "../../assets/logo.png"

class Login extends Component {
    constructor(props){
        super(props);
       this.state = {userName:"",password:""};
       
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onLogin(){
        console.log(this.state.userName)
    }
    render() {
        return (
            <Form className="form-signin">
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
                        <Input type="text" required placeholder ="User Name" name="userName" value={this.state.userName} onChange={(event)=>this.onChange(event)}/>
                    </Col>
                
                </FormGroup>
                <FormGroup row>
                     <Col>
                        <Input type="password" placeholder ="password" value={this.state.password} onChange={(event)=>this.onChange(event)}/>
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
                        <Button color="primary" block   onClick={()=>this.onLogin()}>Login</Button>
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