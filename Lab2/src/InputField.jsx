import React from 'react'

class InputField extends React.Component
{
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(ev) {
        this.props.handleNameChange(ev.target.value); 
    }

    render() {
        const name = this.props.name;
        return (    
        <div>
            <label>Set Name of Player {this.props.number}</label>
            <input type="text" style={{marginLeft:20, width:400}}
                   onChange={ev => this.handleInput(ev)}/>
        </div>
        );
    }
}

export default InputField;