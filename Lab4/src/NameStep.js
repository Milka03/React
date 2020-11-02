import './App.css';
import React, { useState } from 'react';


function NameStep(props)
{
    const [myName,setName]= useState(props.data["name"]);
    const [myLastName,setLastName]= useState(props.data["lastName"]);
    const [myEmail,setEmail]= useState(props.data["email"]);

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(!myName || !myLastName || !myEmail) {return;}
        const newdata = props.data;
        newdata["name"] = myName;
        newdata["lastName"] = myLastName;
        newdata["email"] = myEmail;
        props.submitFunction(newdata);       
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>First Name: </label>
            <br/>
            <input name="name" type="text" onChange={ev => setName(ev.target.value)} value={myName} required="required"/>
            <br/><br/>

            <label>Last Name: </label>
            <br/>
            <input name="lastName" type="text" onChange={ev => setLastName(ev.target.value)} value={myLastName} required="required"/>
            <br/><br/>

            <label>Email Address: </label>
            <br/>
            <input name="email" type="email" onChange={ev => setEmail(ev.target.value)} value={myEmail} required="required"/>
            <br/><br/><br/>
            <input type="submit" value="Next" className="Buttons"></input>
        </form>
    );
}

export default NameStep