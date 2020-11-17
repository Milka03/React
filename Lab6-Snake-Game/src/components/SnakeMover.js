import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {MoveSnake,NewApple,AddTail, NewGame} from '../actions/index';

var movementStarted = false;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
  
class SnakeMove extends Component
{
    startMoving()
    {
        if(movementStarted === true) return;
        movementStarted = true;
        new Promise(() => {
            if(this.props.snakeMoving === true)
                this.Moving();
        });
    }

    Moving()
    {
        let x = this.props.snakeX[0] + this.props.dirX;
        let y = this.props.snakeY[0] + this.props.dirY;
        
        if(this.hitWall(x,y)) 
        {    
            movementStarted = false;
            this.props.NewGameFunction(5,9);
            console.log("END GAME ", movementStarted);
            return;
        }
        this.props.snakeX.pop();
        this.props.snakeY.pop();
        this.props.MoveSnakeFunction(x,y); 
        this.eatApple();

        if(this.props.snakeMoving === true) 
            setTimeout(() =>  this.Moving(), this.props.Time);
    }

    hitWall(x,y) 
    {
        if(x < 0 || x > this.props.Width - 1 || y < 0 || y > this.props.Height - 1)
            return true;
        return false;
    }

    eatApple()
    {
        if(this.props.snakeX[0] === this.props.appleX && this.props.snakeY[0] === this.props.appleY)
        {
            this.props.AddTailFunction(-1,-1);
            this.props.NewAppleFunction(getRandomInt(0,this.props.Width-1), getRandomInt(0,this.props.Height-1));
        }
    }

    render() {
        this.startMoving();
        return (<div></div>);
    }
}

function mapStateToProps(state)
{
    return {
        Width: state.board.Width,
        Height: state.board.Height,
        appleX: state.apple.applePositionX,
        appleY: state.apple.applePositionY,
        snakeX: state.snake.snakePositionX,
        snakeY: state.snake.snakePositionY,      
        dirX: state.snake.moveX,
        dirY: state.snake.moveY,
        points: state.apple.applePoints,
        snakeMoving: state.snake.snakeMoving,
        Time: state.board.Timer
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        MoveSnakeFunction: MoveSnake,
        AddTailFunction: AddTail,
        NewAppleFunction: NewApple,
        NewGameFunction: NewGame
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SnakeMove);