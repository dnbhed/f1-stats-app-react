import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

const Home = () => {
    return(

            <div id="links-container">
                <h1 id="driver-stats-link"><Link to="/driver-stats">Driver Stats</Link></h1>
                <h1 id="compare-drivers-link"><Link to="/compare-drivers">Compare Drivers</Link></h1>
                <h1 id="track-stats-link"><Link to="/track-stats">Track Stats</Link></h1>
                <h1 id="constructor-stats-link"><Link to="/constructor-stats">Constructor Stats</Link></h1>
            </div>
            

    )
}

export default Home