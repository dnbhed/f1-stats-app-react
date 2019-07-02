import React, { Fragment } from 'react'

const NumOfPoles = (props) => {

    const races = props.races;
    let numOfPoles = 0;
    races.forEach(race => {
        if (race.Results[0].grid == 1) {
            numOfPoles += 1
        }
    });

    return (
        <Fragment>
            <h3>Poles:{numOfPoles}</h3>
        </Fragment>
    );
}

export default NumOfPoles