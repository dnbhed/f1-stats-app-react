import React, { Fragment } from 'react'
import NumOfStarts from './CareerStatsComponents/NumOfStarts';
import DriverDetails from './CareerStatsComponents/DriverDetails';
import AverageGrid from './CareerStatsComponents/AverageGrid';
import AverageFinish from './CareerStatsComponents/AverageFinish';
import Card from 'react-bootstrap/Card'
import './CareerStats.css'

const CareerStatsCompare = (props) => {
    return (
        <Card id="driver-career-stats">
            <DriverDetails
                name={props.name}
                code={props.code}
                number={props.number}
                nationality={props.nationality} />
            <NumOfStarts races={props.allRaces} />
            <AverageGrid races={props.allRaces} />
            <AverageFinish races={props.allRaces} />
        </Card>
    );
}



export default CareerStatsCompare