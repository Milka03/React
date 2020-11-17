
 export const MoveSnake = (x,y) => {
    return { 
        type: "MOVE_SNAKE",
        payloadX: x,
        payloadY: y
    }
 };
 
 export const TurnSnake = (x,y) => {
    return { 
        type: "SNAKE_TURN",
        payloadX: x,
        payloadY: y
    }
 };

 export const NewGame = (x,y) =>{
    return { 
        type: "NEW_GAME",
        payloadX: x,
        payloadY: y
    }
}

export const AddTail = (x,y) => {
    return {
        type: "ADD_TAIL",
        payloadX: x,
        payloadY: y
    }
}

export const NewApple = (x,y) => {
    return { 
        type: "ADD_APPLE",
        payloadX: x,
        payloadY: y
    }
}

export const InitApple = (x,y) => {
    return { 
        type: "INIT_APPLE",
        payloadX: x,
        payloadY: y
    }
}