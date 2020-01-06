import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./DriverSelect.css";

const DriverSelect = props => {
  const options = props.drivers.map(driver => {
    console.log(props.drivers)
    return (
      <Dropdown.Item
        as="button"
        eventKey={driver.driverId}
        value={driver.driverId}
        onClick={handleChange}
      >
        {driver.givenName} {driver.familyName}
      </Dropdown.Item>
    );
  });

  function handleChange(event) {
    props.onDriverSelected(event.target.value, props.number);
  }

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="driver-selector">
        Select Driver
      </Dropdown.Toggle>

      <Dropdown.Menu>{options}</Dropdown.Menu>
    </Dropdown>
  );
};

export default DriverSelect;
