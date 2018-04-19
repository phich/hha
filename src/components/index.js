import React, { Component } from 'react';
import Header from "./layout/header";
import LeftMenu from "./layout/leftMenu"
import { Container, Row, Col } from 'reactstrap';
class Index extends Component {
    render() {
        return (
            <div id="wrapper">
                <Header/>
                <LeftMenu/>
                <Container>
                  aaaaaaaaaaaaaaaaaaaaaaaa
                </Container>
            </div>
        );
    }
}

export default Index;