import React from 'react';
import {Row, Col, Container} from "react-bootstrap";
import Picture from './data/picture.png';

class CarsListItem extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = {
            visibleInput: false,
            visiblePrice: true
        };
        this.Delete_Click = this.Delete_Click.bind(this);
        this.Edit_Click = this.Edit_Click.bind(this);
        this.Price_Change = this.Price_Change.bind(this);
    }

    Delete_Click() {
        this.props.handleDeleteEvent(this.props.name);
    }

    Edit_Click() {
        if(this.state.visiblePrice === true) {
            this.setState({visibleInput: true, visiblePrice: false});
        }
        else {
            this.setState({visibleInput: false, visiblePrice: true});
        }
    }

    Price_Change(ev) {
        this.props.handlePriceChange(ev.target.value, this.props.name);
    }

    Button_Text(visibIn) {
        if(visibIn === true) {
            return 'Save';
        }
        return 'Edit';
    }

    render() {
        const {visibleInput, visiblePrice} = this.state;
        const buttonText = this.Button_Text(this.state.visibleInput);
        return(
            <div>
            <Container style={{border: '2px solid black', padding:10, marginTop:20, height:100}} fluid >
                <Row>
                    <Col md="auto">
                        <img src={Picture} alt="" style={{maxHeight:90, maxWidth:90}}/>
                    </Col>
                    <Col style={{fontWeight: 'bold', fontSize: 20}} xs={2}>{this.props.name}</Col>
                    <Col xs={8}>
                        <Row>{this.props.seats} seats</Row>
                        <Row>{this.props.doors} doors</Row>
                        <Row>air conditioning</Row>
                    </Col>
                    <Col>
                        <Row style={{fontSize:14}}>Price per day</Row>
                        {visiblePrice && <Row style={{fontSize:18, fontWeight: 'bold'}}>{this.props.price} PLN</Row> }
                        {visibleInput && 
                            <Row>
                                <input style={{height:25}} type="number" onChange={ev => this.Price_Change(ev)}/>
                            </Row>}
                        <Row style={{marginBottom:10}}>
                            <button variant="outline-dark" onClick={() => this.Edit_Click()}>{buttonText}</button>
                            <button style={{marginLeft:5}} variant="outline-dark" 
                                    onClick={() => this.Delete_Click()}>Delete</button>
                        </Row>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default CarsListItem