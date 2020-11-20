import React from 'react';
import {Link} from 'react-router-dom';

function About() 
{
    return (
        <div>
            <h5>About Section</h5>
            <Link to='/cars'>Cars</Link>
            <br/>
            <Link to='/'>Home</Link>
        </div>
    );
}

export default About;