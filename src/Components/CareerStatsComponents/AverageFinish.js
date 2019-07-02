import React, { Fragment } from 'react'

const AverageFinish = (props) => {

    const races = props.races;

    function getAverageFinish() {
        let count = 0;
        races.forEach(race => {
            if (parseInt(race.Results[0].position)){
                count += parseInt(race.Results[0].position)
            } 
        })
        return Math.round(count / races.length)

    }

    const averageFinish = getAverageFinish();

    return (
        <Fragment>
            <h3>Average Finishing Position:{averageFinish}</h3>
        </Fragment>
    );
}

export default AverageFinish