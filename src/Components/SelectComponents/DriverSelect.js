import React from 'react';
import './DriverSelect.css'

const DriverSelect = (props) => {

    const options = props.drivers.map((driver) => {
        return <option key={driver.driverId} value={driver.driverId}>{driver.givenName} {driver.familyName}</option>
    })

    function handleChange(event) {
        props.onDriverSelected(event.target.value, props.number)
    }

    return (
        <div id="select-bar">
            <select id="driver-selector" defaultValue="default" onChange={handleChange}>
                <option disabled value="default">Choose a Driver...</option>
                {options}
            </select>
        </div>
    )
}

export default DriverSelect;