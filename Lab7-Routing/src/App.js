import './App.css';
import Home from './Home';
import CarsList from './CarsList';
import About from './About';
import GetStarted from './GetStarted';
import {BrowserRouter as Router, Redirect} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import { useState } from 'react';

function App() 
{
    const [visited,setVisited] = useState(false);

    return (
        <div className="App">
            <header className="App-header">
                <Router>
                    <Switch>
                    <Route exact path='/'>
                        {!visited ? <Redirect to="/start"/> : <Home/>}
                    </Route>
                    <Route path='/cars'>
                        <CarsList></CarsList>
                    </Route>
                    <Route path='/about'>
                        <About></About>
                    </Route>
                    <Route path='/start'>
                        <GetStarted setVisited={setVisited}/>
                    </Route>
                    </Switch>
                </Router>
            </header>
        </div>
    );
}

export default App;
