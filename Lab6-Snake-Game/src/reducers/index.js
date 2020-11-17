import {combineReducers} from 'redux';
import BoardReducer from './boardReducer';
import SnakeReducer from './snakeReducer';
import AppleReducer from './appleReducer';

const allReducers = combineReducers({
    board: BoardReducer,
    snake: SnakeReducer,
    apple: AppleReducer
});

export default allReducers;