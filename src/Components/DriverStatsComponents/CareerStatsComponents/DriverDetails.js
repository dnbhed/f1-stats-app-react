import React, { Fragment } from 'react'

const DriverDetails = (props) => {
    return (
        <Fragment>
            <h1 id="driver-name">{props.name} </h1>
            <h2 id="driver-number">{props.code}:{props.number}</h2>
            <h2 id="driver-nationality">{props.nationality}</h2>
        </Fragment>
    )
}

export default DriverDetails