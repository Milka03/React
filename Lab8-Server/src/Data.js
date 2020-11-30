import React from 'react'
import EmployeesList from './EmployeesList'
import Form from './Form';


class Data extends React.Component 
{
    constructor(props) 
    {
		super(props);
		this.state = {
            employees: [],
            isLoading: false,
            isAdding: false,
            isSaving: false
        };
        this.componentGet = this.componentGet.bind(this);
        this.getData = this.getData.bind(this);
        this.addCancelEmployee = this.addCancelEmployee.bind(this);
        this.setSaving = this.setSaving.bind(this);
	}

	componentDidMount() {
        this.componentGet();
    }

    componentGet() {
        this.setState({ isLoading: true });
        fetch('http://localhost:3004/employees')
        .then(response => response.json())
        .then(response => this.setState({ employees: response}))
        .then(() => this.setState({isLoading: false}));
    }

    getData() {
        fetch('http://localhost:3004/employees')
        .then(response => response.json())
        .then(response => this.setState({ employees: response}))
        .then(() => this.setState({isSaving: false, isAdding: false}));
    }

    addCancelEmployee() {
        const tmp = this.state.isAdding;
        this.setState({isAdding: !tmp});
    }

    setSaving(state) {
        this.setState({isSaving: state});
    }

    render() 
    {
        if (this.state.isLoading) {
            return <p>Loading ...</p>;
        }
        if (this.state.isSaving) {
            return <p>Saving ...</p>;
        }
        if (this.state.isAdding) {
            return <Form cancelFunction={this.addCancelEmployee} setSaving={this.setSaving} reloadData={this.getData}/>
        }
		return (
            <div>
                <div>
                    <p style={{fontSize:30}}>Employees loaded: {this.state.employees.length}</p>
                    <EmployeesList employees={this.state.employees} reload={this.getData}/>
                    <br/>
                    <button className="buttons" onClick={this.addCancelEmployee}>Add employee</button>
                </div>
            </div>
		)
	}
}

 export default Data;
