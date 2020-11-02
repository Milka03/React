import React, { useState } from 'react';

function AddressStep(props)
{
    const [deactivated, setDeactivated] = useState(false);
    const [myDelStreet,setDelStreet]= useState(props.data["delStreet"]);
    const [myDelCode,setDelCode]= useState(props.data["delCode"]);
    const [myDelCity,setDelCity]= useState(props.data["delCity"]);
    const [myInvStreet,setInvStreet]= useState(props.data["invStreet"]);
    const [myInvCode,setInvCode]= useState(props.data["invCode"]);
    const [myInvCity,setInvCity]= useState(props.data["invCity"]);

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(!myDelStreet || !myDelCode || !myDelCity) {return;}

        const newdata = props.data;
        newdata["delStreet"] = myDelStreet;
        newdata["delCode"] = myDelCode;
        newdata["delCity"] = myDelCity;
        newdata["invStreet"] = myInvStreet;
        newdata["invCode"] = myInvCode;
        newdata["invCity"] = myInvCity;

        props.submitFunction(newdata);       
    }

    function fillInvoiceAddress() {
        if(myDelStreet === "" || myDelCode === "" || myDelCity === "") return;
        else if(deactivated === false) {
            setDeactivated(true);
            setInvStreet(myDelStreet);
            setInvCode(myDelCode);
            setInvCity(myDelCity);
        }
    }
  
    return (
        <div >
            {deactivated}
            <form onSubmit={handleSubmit}>
                <div className="rowDiv">
                    <div style={{margin:30}}>
                        <h3>Delivery Address</h3>
                        <br/><br/>
                        <label>Street:</label> <br/>
                        <input name="delStreet" type="text" required="required" onChange={ev => setDelStreet(ev.target.value)} value={myDelStreet} />
                        <br/>
                        <label>Zip Code:</label> <br/>
                        <input name="delCode" type="text" required="required" inputMode="numeric" pattern="\d{2}-(\d{3})" title="Format: 00-000"
                                onChange={ev => setDelCode(ev.target.value)} value={myDelCode}/>
                        <br/>
                        <label>City:</label> <br/>
                        <input name="delCity" type="text" required="required"  onChange={ev => setDelCity(ev.target.value)} value={myDelCity}/>
                        <br/><br/>
                    </div>
                    <div style={{margin:30}}>
                        <h3>Invoice Address</h3>
                        <button className="ButtonSmall" onClick={fillInvoiceAddress}>Same as Delivery Address</button>
                        <br/> <br/>
                        <label>Street:</label> <br/>
                        <input name="invStreet" type="text" required="required" onChange={ev => setInvStreet(ev.target.value)} 
                                disabled={deactivated} value={myInvStreet}/>
                        <br/>
                        <label>Zip Code:</label> <br/>
                        <input name="invCode" type="text" required="required" inputMode="numeric" pattern="\d{2}-(\d{3})" title="Format: 00-000"
                                onChange={ev => setInvCode(ev.target.value)} value={myInvCode} disabled={deactivated}/>
                        <br/>
                        <label>City:</label> <br/>
                        <input name="invCity" type="text" required="required" onChange={ev => setInvCity(ev.target.value)} 
                                disabled={deactivated} value={myInvCity}/>
                        <br/><br/>
                    </div>
                </div>
                <div>
                    <button className="Buttons" onClick={props.changePage}>Back</button>
                    <input type="submit" value="Next" className="Buttons"></input>
                </div>
            </form>
        </div>
    );
}

export default AddressStep