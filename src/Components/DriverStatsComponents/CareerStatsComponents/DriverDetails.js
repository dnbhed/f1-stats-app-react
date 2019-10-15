import React, { Fragment } from 'react'

const DriverDetails = (props) => {
    return (
        <Fragment>
            <h3 id="driver-name">{props.name} </h3>
            <h3 id="driver-number">{props.code}:{props.number}</h3>
            <h3 id="driver-nationality">{props.nationality}</h3>
        </Fragment>
    )
}

export default DriverDetails