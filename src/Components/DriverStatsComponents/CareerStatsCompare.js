import React, { Fragment } from 'react'
import NumOfStarts from './CareerStatsComponents/NumOfStarts';
import DriverDetails from './CareerStatsComponents/DriverDetails';
import AverageGrid from './CareerStatsComponents/AverageGrid';
import AverageFinish from './CareerStatsComponents/AverageFinish';
import './CareerStats.css'

const CareerStatsCompare = (props) => {
    return (
        <div id="driver-career-stats">
            <DriverDetails
                name={props.name}
                code={props.code}
                number={props.number}
                nationality={props.nationality} />
            <NumOfStarts races={props.allRaces} />
            <AverageGrid races={props.allRaces} />
            <AverageFinish races={props.allRaces} />
        </div>

    );

}



export default CareerStatsCompare