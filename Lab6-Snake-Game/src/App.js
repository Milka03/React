import './App.css';
import BoardContainer from './containers/boardContainer'
import KeyHandler from './components/KeyHandler';
import SnakeMover from './components/SnakeMover';

import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';

const store = createStore(allReducers, composeWithDevTools());

function App() {
    return (
        <div className="App">
        <header className="App-header">
            <h3 style={{color: "greenyellow"}}>Snake Game</h3>
            <Provider store={store}>
                <SnakeMover/>
                <KeyHandler/>
                <BoardContainer/>
            </Provider>
        </header>
        </div>
    );
}

export default App;
