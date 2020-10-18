import React, { useEffect, useState } from 'react';
import { Row, Col, Card, ListGroup, Form, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import { getListing, changeFormInputs } from '../actions/index';

function mapStateToProps(state) {
    return {
        info: state.listingInfo,
        error: state.error,
        reservationCost: state.reservationCost,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getListing: () => dispatch(getListing()),
        changeFormInputs: (formChangeDetails) => dispatch(changeFormInputs(formChangeDetails))
    };
}

const Detail = (props) => {

    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(0);
    const [children, setChildren] = useState(0);
    //if checked==truee so pets are allowed and vice versa
    const [checked, setChecked] = useState(true);

    function handleSubmitFormInputs(e) {
        e.preventDefault();
        props.changeFormInputs({
            checkIn: checkIn,
            checkOut: checkOut,
            guests: guests,
            children: children,
            pets: checked,
        });
    }

    useEffect(() => {
        // console.log(props);
        props.getListing();
    }, []);

    return (
        <Card>
            <Card.Img variant="top" src={props.info.image_url} style={{ width: '18rem' }} />
            <Card.Body>
                <Card.Title>{props.info.name} </Card.Title>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="checkin">
                                <Form.Label>Check In</Form.Label>
                                <Form.Control dateFormat="MM/DD/YYYY" type="date" name="checkin" onChange={e => setCheckIn(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="checkout">
                                <Form.Label>Check Out</Form.Label>
                                <Form.Control dateFormat="MM/DD/YYYY" type="date" name="checkout" onChange={e => setCheckOut(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group>
                        <Form.Label>How many guests ?</Form.Label>
                        <Form.Control type="number" name="guests" defaultValue={0} onChange={e => setGuests(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>How many children ?</Form.Label>
                        <Form.Control type="number" name="children" defaultValue={0} onChange={e => setChildren(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Do you have pets ?</Form.Label>
                        <Form.Check
                            type="radio"
                            id="yes"
                            label="Yes"
                            checked={checked}
                            onClick={() => setChecked(true)}
                        />
                        <Form.Check
                            type="radio"
                            label="No"
                            id="no"
                            checked={!checked}
                            onClick={() => setChecked(false)}
                        />
                    </Form.Group>
                </Form>
                <Button color="primary" onClick={e => handleSubmitFormInputs(e)}>Submit</Button>
                <Card.Text>Your reservation cost</Card.Text>
                <Row>
                    <Col lg="6" sm="6" md="6" xs="6">
                        <ListGroup>
                            <ListGroup.Item>Stay duration :</ListGroup.Item>
                            <ListGroup.Item>Nights cost :</ListGroup.Item>
                            <ListGroup.Item>Discount :</ListGroup.Item>
                            <ListGroup.Item>Cleaning fees :</ListGroup.Item>
                            <ListGroup.Item>Your total :</ListGroup.Item>

                        </ListGroup>
                    </Col>
                    <Col lg="6" sm="6" md="6" xs="6">
                        <ListGroup>
                            <ListGroup.Item>{props.reservationCost.nights_count} nights</ListGroup.Item>
                            <ListGroup.Item>{props.reservationCost.nights_cost}$ </ListGroup.Item>
                            <ListGroup.Item>{props.reservationCost.discount}$</ListGroup.Item>
                            <ListGroup.Item>{props.reservationCost.cleaning_fee}</ListGroup.Item>
                            <ListGroup.Item>{props.reservationCost.total}$</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

const connectedDetail = connect(mapStateToProps, mapDispatchToProps)(Detail);
export default connectedDetail;