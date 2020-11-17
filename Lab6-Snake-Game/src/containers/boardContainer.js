import React, {Component} from 'react';
import {connect} from 'react-redux';
import Board from '../components/Board'

class BoardContainer extends Component
{
    render() {
        return ( 
            <div>
                <Board />
                <div className="InfoDiv">Board size: {this.props.board.Width} x {this.props.board.Height} </div>
                <div className="InfoDiv" style={{marginLeft:50}}>Points: {this.props.points} </div>
            </div>
        )
    }
}

function mapStateToProps(state)
{
    return {
        board: state.board,
        points: state.apple.applePoints,
        buttonDisabled: state.snake.snakeMoving,
        active: state.snake.snakeMoving,
    }
}


export default connect(mapStateToProps,null)(BoardContainer);