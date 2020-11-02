import React from 'react';

function SummaryStep(props)
{
    
    return (
        <div>
            <div className="rowDiv">
                <div className="summaryDiv">
                    <h3>Client Data</h3>
                    <br/>
                    <label>First Name: {props.data["name"]}</label>
                    <br/>
                    <label>Last Name: {props.data["lastName"]}</label>
                    <br/>
                    <label>Email: {props.data["email"]}</label>
                    <br/>
                </div>
                <div className="summaryDiv">
                    <h3>Delivery Address</h3>
                    <br/>
                    <label>Street: {props.data["delStreet"]}</label>
                    <br/>
                    <label>Zip Code: {props.data["delCode"]}</label>
                    <br/>
                    <label>City: {props.data["delCity"]}</label>
                    <br/>
                </div>
                <div className="summaryDiv">
                    <h3>Invoice Address</h3>
                    <br/>
                    <label>Street: {props.data["invStreet"]}</label>
                    <br/>
                    <label>Zip Code: {props.data["invCode"]}</label>
                    <br/>
                    <label>City: {props.data["invCity"]}</label>
                    <br/>
                </div>
            </div>
            <br/><br/>
            <button className="ButtonBig" onClick={props.backToName}>Back to Name</button>
            <button className="ButtonBig" onClick={props.changePage}>Back to Address</button>
        </div>
    );
}

export default SummaryStep