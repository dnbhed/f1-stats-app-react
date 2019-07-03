import React, { Fragment } from 'react'

const NumOfStarts = (props) => {

    const starts = props.races.length;

    return (
        <Fragment>
            <h3 id="num-of-starts">Starts:{starts}</h3>
        </Fragment>
    );
}

export default NumOfStarts