import React from 'react'
import Employee from './Employee'

const EmployeesList = (props) =>
{
    const list = props.employees.map(EmployeeData =>
       <Employee key={EmployeeData.id} data={EmployeeData} reload={props.reload} />)
    return(
        <div>
            {list}
        </div>
    )
}
export default EmployeesList;