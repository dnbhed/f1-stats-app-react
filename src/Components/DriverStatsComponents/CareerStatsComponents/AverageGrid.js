import React, { Fragment } from 'react'

const AverageGrid = (props) => {

    const races = props.races;
    let averageGrid = 0
    function getAverageGrid(){
        let count = 0;
        races.forEach(race => {
            if (parseInt(race.Results[0].grid) === 0) {
                count += 20
            } else {
                count += parseInt(race.Results[0].grid)
            }
        })
        return parseFloat((count / races.length).toFixed(2))
    }
    
    if(getAverageGrid()) {averageGrid = getAverageGrid();}
    
    return (
        <Fragment>
            <h3 id="average-grid">Average Grid Position: {averageGrid}</h3>
        </Fragment>
    );
}

export default AverageGrid