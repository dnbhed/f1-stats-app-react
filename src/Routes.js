import React, { Component, Fragment } from "react";
import DriverStatsContainer from './Containers/DriverStatsContainer'
import CompareDriversContainer from './Containers/CompareDriversContainer'
import TrackStatsContainer from './Containers/TrackStatsContainer'
import ConstructorStatsContainer from './Containers/ConstructorStatsContainer'
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
                    <Route exact path="/compare-drivers" component={CompareDriversContainer} />
                    <Route exact path="/track-stats" component={TrackStatsContainer} />
                    <Route exact path="/constructor-stats" component={ConstructorStatsContainer} />
                </Fragment>
            </Router>
        );
    }
}

export default Routes;