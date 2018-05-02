import React, { Component } from 'react';
//add react - router
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
//add react bootstrap
import { Form } from "reactstrap";
//add my components
import * as routePath from "../../constants/route";
import Login from '../users/login';
import Register from "../users/register";
import NotFound from "./notFound"
import Home from "../home"

const routes = [
    {
        path: routePath.SIGN_IN,
        exact: true,
        main: () => <Login />
    },
    {
        path: routePath.HOME,
        exact: true,
        main: () => <Home />
    }
]

class RoutersConfig extends Component {


    render() {
        return (
            <Router>
                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))}
                    </Switch>
                </Router>
        );
    }
}

export default RoutersConfig