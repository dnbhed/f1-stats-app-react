import React, { Fragment } from 'react'

const DriverDetails = (props) => {
    return (
        <Fragment>
            <h1>{props.name} </h1>
            <h2>{props.code}:{props.number}</h2>
            <h2>{props.nationality}</h2>
        </Fragment>
    )
}

export default DriverDetails