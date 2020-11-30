import React, { useState } from 'react';

function Employee(props)
{
    const [isDeleting, setIsDeleting] = useState(false);

    function deleteEmployee() 
    {
        setIsDeleting(true);
        fetch('http://localhost:3004/employees/' + props.data.id, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(response => console.log(response))
        .then(() => props.reload())
    }

    if(isDeleting === true){
        return (
            <li>
                <label>
                    Deleting ...
                </label>
            </li>
        )
    }
    if(props.data.isActive === true){
        return(
            <li>
                <label style={{color: "green"}}>
                    {props.data.name}, Age: {props.data.age}             
                </label>
                <button className="smallButton" onClick={deleteEmployee}>Delete</button>
            </li>
        )
    }
    else {
        return(
            <li>
                <label style={{color: "red"}}>
                    {props.data.name}, Age: {props.data.age}             
                </label>
                <button className="smallButton" onClick={deleteEmployee}>Delete</button>
            </li>
        )
    }
}
export default Employee