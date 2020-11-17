import React, {Component} from 'react';
import {connect} from 'react-redux';

const tileMargin = 3
const tileSize = 40

class Board extends Component 
{
    tile(size, color="white")
    {
        return(
            <div style={{backgroundColor: color, width: size, height: size, 
                        marginLeft: tileMargin, marginRight: tileMargin ,display: "inline-block"}}>
            </div>
        )
    }

    isSnakeTile(x, y) 
    {
        for(let n = 0; n < this.props.snakeX.length; n++)
        {
            if(this.props.snakeX[n] === x && this.props.snakeY[n] === y)
                return true;
        }
        return false;
    }

    isAppleTile(x, y) 
    {
        if(this.props.appleX === x && this.props.appleY === y)
            return true;
        return false;
    }

    showGrid(W, H) 
    {
        let length = (tileSize + 3 * tileMargin) * W;
        let table = [];
        
        for(let i = 0; i < W; i++) {
            for(let j = 0; j < H; j++) {
                if(this.isSnakeTile(i,j) === true)
                    table.push(this.tile(tileSize, this.props.snakeColor))
                else if(this.isAppleTile(i,j) === true)
                    table.push(this.tile(tileSize, this.props.appleColor))
                else
                    table.push(this.tile(tileSize, this.props.board.TileColor))
            }
        }
        
        return(
            <div style={{width: length}}>
                {table}
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.showGrid(this.props.Height,this.props.Width)}
            </div>
        );
    }

}

function mapStateToProps(state)
{
    return {
        Width: state.board.Width,
        Height: state.board.Height,
        board: state.board,

        snakeX: state.snake.snakePositionX,
        snakeY: state.snake.snakePositionY,
        snakeColor: state.snake.snakeColor,

        appleX: state.apple.applePositionX,
        appleY: state.apple.applePositionY,
        appleColor: state.apple.appleColor
    };
}


export default connect(mapStateToProps, null)(Board);