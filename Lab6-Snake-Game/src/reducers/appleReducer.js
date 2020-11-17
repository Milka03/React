let aplX = 5
let aplY = 9
let points = 0

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=null,action)
{
    switch(action.type)
    {
        case "ADD_APPLE":
            aplX = action.payloadX;
            aplY = action.payloadY;
            points = points + 1;
            break;
        case "NEW_GAME":
            aplX = action.payloadX;
            aplY = action.payloadY;
            points = 0;
            break;
        default:
            break;
    }

    return {
        applePositionX: aplX,
        applePositionY: aplY,
        appleColor: "red",
        applePoints: points
    }
}