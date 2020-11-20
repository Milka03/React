import React from 'react';
import {Link} from 'react-router-dom';

function GetStarted(props) 
{
    return (
        <div>
            <h5>Got Started! :)</h5>
            <Link to='/'>Get Back</Link>
            {props.setVisited(true)}
        </div>
    );
}

export default GetStarted;