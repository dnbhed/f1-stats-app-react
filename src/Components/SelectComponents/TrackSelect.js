import React from 'react';
import './DriverSelect.css'

const TrackSelect = (props) => {

    const options = props.tracks.map((track, index) => {
        return <option key={index} value={track.trackId}>{track.circuitName}</option>
    })

    function handleChange(event) {
        props.onTrackSelected(event.target.value)
    }

    return (
        <div id="select-bar">
            <select id="track-selector" defaultValue="default" onChange={handleChange}>
                <option disabled value="default">Choose a Track...</option>
                {options}
            </select>
        </div>
    )
}

export default TrackSelect;