import React from 'react'

class Player extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick() {
        this.props.state_handler();
        const temp = this.state.counter + 1;
        this.setState({counter: temp});
    }

    render() {
        return (    
        <div style={{border: '2px solid black', padding: 10}}>
            <p style={{fontSize: 20, fontWeight: 'bold'}}>Player {this.props.number}</p>
            <p>Name:  {this.props.name}</p>
            <p>Played times: {this.state.counter}
            <button style={{float: 'right', height:30, width:250}} onClick={this.buttonClick}
                    variant="outline-dark" disabled={this.props.buttonState}> {this.props.text} </button>
            </p>
        </div>
    );}
}

export default Player;