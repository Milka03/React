import React, { useState } from 'react';
import {Route, Router, Switch, Link, useHistory} from 'react-router-dom';
import EditCar from './EditCar';
import Home from './Home';

const carsList = 
[
    { 
        id: 1,
        name: "Tesla"
    },
    { 
        id: 2,
        name: "BMW"
    },
    { 
        id: 3,
        name: "Toyota"
    },
    { 
        id: 4,
        name: "Chevrolet"
    },
]

function CarsList()
{
    const [list, setList] = useState(carsList);
    let history = useHistory();

    function addNewCar(car){
        car.id = list.length + 1;
        setList([...list, car]);
        history.push('/cars');
    }

    function saveCar(car){
        setList([...list.map(item => car.id == item.id ? car : item)]);
        history.push('/cars');
    }

    function getCarByID(id) {
        return list.find(car => car.id === id);
    }

    return (
        <div>
            <ul>
            {list.map(car => {return <li>{car.name} <button><Link to={`/cars/${car.id}`}>Edit</Link></button></li>})}
            </ul>
            <Link to='/cars/new'>Add car</Link>
            {/* {" "}
            <Link to='/' style={{marginLeft:10}}>Home</Link> */}
            <Switch>
                <Route path='/cars/new'>
                    <EditCar addNewCar={addNewCar} getCar={getCarByID}></EditCar>
                </Route>
                <Route path='/cars/:id'>
                    <EditCar getCar={getCarByID} editCar={saveCar}></EditCar>
                </Route>
            </Switch>
        </div>
    )
}

export default CarsList;