import React, { Fragment } from 'react'

const NumOfWins = (props) => {

    const races = props.races;
    let numOfWins = 0;
    races.forEach(race => {
        if (race.Results[0].position === 1) {
            numOfWins += 1
        }
    });

    return (
        <Fragment>
            <h3>Wins:{numOfWins}</h3>
        </Fragment>
    );
}

export default NumOfWins