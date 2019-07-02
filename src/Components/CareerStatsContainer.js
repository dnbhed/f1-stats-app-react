import React, {Component, Fragment} from 'react'
import NumOfWins from './CareerStatsComponents/NumOfWins';
import NumOfStarts from './CareerStatsComponents/NumOfStarts';
import DriverDetails from './CareerStatsComponents/DriverDetails';
import AverageGrid from './CareerStatsComponents/AverageGrid';
import AverageFinish from './CareerStatsComponents/AverageFinish';


const CareerStatsContainer = (props) => {
    return (
        <Fragment>
            <DriverDetails 
                name={props.name} 
                code={props.code}
                number={props.number}
                nationality={props.nationality}/>
            <NumOfWins races={props.allRaces} />
            <NumOfStarts races={props.allRaces} />
            <AverageGrid races={props.allRaces} />
            <AverageFinish races={props.allRaces} />
        </Fragment>
    );
    
}

   

export default CareerStatsContainer