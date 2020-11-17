import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {TurnSnake} from '../actions/index';

class KeyHandler extends Component
{
    keyPressed(key) 
    {   
        switch(key)
        {
            case 'ArrowUp':
                this.props.SnakeDirection(-1, 0); 
                break;
            case 'ArrowDown':
                this.props.SnakeDirection(1, 0); 
                break;
            case 'ArrowLeft':
                this.props.SnakeDirection(0, -1); 
                break;
            case 'ArrowRight': 
                this.props.SnakeDirection(0, 1); 
                break;
            default:
                break;
        }
    }

    render() {
        window.addEventListener("keydown",(event) => {this.keyPressed(event.key)})
        return (<div></div>);
    }
}


function matchDispatchToProps(dispatch){
    return bindActionCreators(
    {SnakeDirection: TurnSnake}, dispatch)
}

export default connect(null, matchDispatchToProps)(KeyHandler);