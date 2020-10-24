import React, { useState } from 'react';
import carsData from './data/cars.json'
import CarsListItem from './CarsListItem'


class CarsList extends React.Component {

    constructor() {
        super();
        this.state = {cars: carsData, search: ""}
        this.PriceInput = this.PriceInput.bind(this);
        this.Search_Click = this.Search_Click.bind(this);
        this.Delete_Car_Click = this.Delete_Car_Click.bind(this);
    }

    PriceInput(newPrice, carName) {
        this.setState(state => {
            const list = this.state.cars.map((item) => {
                if (item.name === carName) {
                    item.pricePerDay = newPrice;
                }
                return item;
            });
            return list;
        });
    }

    Search_Click() {
        const keyword = document.getElementById('SearchInput').value;
        this.setState({search:keyword})
    }

    Delete_Car_Click(carToDelete){
        this.setState({cars: this.state.cars.filter((item) => item.name !== carToDelete)})
    }

    render() {
        const searchText = this.state.search;
        return(
            <div style={{margin:20, padding:20}}>
                <input type="text" placeholder="Search by name.." id="SearchInput"/>
                <button onClick={this.Search_Click}>Search</button>
                {this.state.cars.filter((car) => {
                    if(searchText === "" || car.name.toLowerCase().includes(searchText.toLowerCase())) {
                        return car;
                    }
                    else { return null; }
                }).map(car => 
                <CarsListItem name={car.name} seats={car.seats} doors={car.doors} price={car.pricePerDay}
                handlePriceChange={this.PriceInput} handleDeleteEvent={this.Delete_Car_Click}/>)}
            </div>
        )
    }
}


export default CarsList