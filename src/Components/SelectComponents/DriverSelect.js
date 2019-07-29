import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import './DriverSelect.css'

const DriverSelect = (props) => {

    const options = props.drivers.map((driver) => {
        return <Dropdown.Item onClick={handleChange} as="button" key={driver.driverId} eventKey={driver.driverId} value={driver.driverId}>{driver.givenName} {driver.familyName}</Dropdown.Item>
    })

    function handleChange(event) {
        props.onDriverSelected(event.target.value, props.number)
    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select a Driver
            </Dropdown.Toggle>
            <Dropdown.Menu id="dropdown-basic-button" title="Select a Driver" onSelect={handleChange}>
                {options}
            </Dropdown.Menu >
        </Dropdown>




        // <select id="driver-selector" defaultValue="default" onChange={handleChange}>
        //         <option disabled value="default">Choose a Driver...</option>
        //         {options}
        //     </select>
    )
}

export default DriverSelect;