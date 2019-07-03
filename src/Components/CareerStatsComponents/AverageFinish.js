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
        return parseFloat((count / races.length).toFixed(2))

    }

    const averageFinish = getAverageFinish();

    return (
        <Fragment>
            <h3 id="average-finish">Average Finishing Position:{averageFinish}</h3>
        </Fragment>
    );
}

export default AverageFinish