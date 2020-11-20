import React from 'react';
import {Link} from 'react-router-dom';

function Home() 
{
    return (
        <div>
            <h5>Home Section</h5>
            <Link to='/cars'>Cars</Link>
            <br/>
            <Link to='/about'>About</Link>
        </div>
    );
}

export default Home;