import React, { useState } from 'react';
import NameStep from './NameStep';
import AddressStep from './AddressStep';
import SummaryStep from './SummaryStep';

function CustomerForm()
{
    const initialValues = { name:"",lastName:"",email:"", delStreet:"",delCode:"",
                            delCity:"",invStreet:"",invCode:"",invCity:"" };
    const [formData, setFormData] = useState(initialValues);  
    const [currentPage, setCurrentPage] = useState(0);
     
    const onSubmit = (data) => {
        setFormData(data);
        let tmp = currentPage;
        setCurrentPage(tmp+1);
    }

    function backStep() {
        let tmp = currentPage;
        setCurrentPage(tmp-1);
    }

    function backToName() {
        setCurrentPage(0);
    }

    return (
        <div className="formDiv">
            {currentPage === 0 ? <NameStep submitFunction={onSubmit} data={formData}/>  : ""}

            {currentPage === 1 ? <AddressStep submitFunction={onSubmit} data={formData} changePage={backStep} />  : ""}

            {currentPage === 2 ? <SummaryStep data={formData} changePage={backStep} backToName={backToName}/>  : ""}
            
        </div>
    );
}

export default CustomerForm