import React, { Component, Fragment } from "react";
import DriverStatsContainer from './Containers/DriverStatsContainer'
import NavBar from "./Containers/NavBar"
import Home from './Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class Routes extends Component {


    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar />
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/driver-stats" component={DriverStatsContainer} />
                </Fragment>
            </Router>
        );
    }
}

export default Routes;