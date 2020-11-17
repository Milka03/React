//Initial Snake State
const initPositionsX = [5,5,5];
const initPositionsY = [3,2,1];
const initDirX = 0
const initDirY = 1

//Snake Variables
let Positions_X = initPositionsX
let Positions_Y = initPositionsY
let xDir = initDirX
let yDir = initDirY
let IsActive = true

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = null,action)
{
    switch(action.type)
    {
        case "MOVE_SNAKE":
            Positions_X.unshift(action.payloadX)
            Positions_Y.unshift(action.payloadY)
            break;
        case "SNAKE_TURN":
            if(xDir !== action.payloadX * (-1))
                xDir = action.payloadX
            if(yDir !== action.payloadY * (-1))
                yDir = action.payloadY
            break;
        case "ADD_TAIL":
            Positions_X.push(action.payloadX)
            Positions_Y.push(action.payloadY)
            break;
        case "NEW_GAME":
            Positions_X = [5,5,5];
            Positions_Y = [3,2,1];
            xDir = 0
            yDir = 1 
            IsActive = true
            break;
        default:
            break;
    }

    return {
        snakePositionX: Positions_X,
        snakePositionY: Positions_Y,
        snakeColor: "greenyellow",
        moveX: xDir,
        moveY: yDir,
        snakeMoving: IsActive,
    }
}