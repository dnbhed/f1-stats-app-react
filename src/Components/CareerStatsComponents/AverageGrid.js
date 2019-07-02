import React, { Fragment } from 'react'

const AverageGrid = (props) => {

    const races = props.races;

    function getAverageGrid(){
        let count = 0;
        races.forEach(race => {
            count += parseInt(race.Results[0].grid)
        })
        return Math.round(count / races.length)

    }
    
    const averageGrid = getAverageGrid();
    
    return (
        <Fragment>
            <h3>Average Grid Position:{averageGrid}</h3>
        </Fragment>
    );
}

export default AverageGrid