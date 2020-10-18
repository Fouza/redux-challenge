import React from "react";
import { Row, Col, Card, ListGroup, Form, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import { addMessage, goToConfirm, calculateReservationCost, confirmReservation } from '../actions/index';

function mapStateToProps(state) {
    return {
        info: state.listingInfo,
        error: state.error,
        goToConfirmation: state.goToConfirmation,
        formInputs: state.formInputs
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addMessage: message => dispatch(addMessage(message)),
        goToConfirm: goToConfirmation => dispatch(goToConfirm(goToConfirmation)),
        calculateReservationCost: reservationInfo => dispatch(calculateReservationCost(reservationInfo)),
        confirmReservation: () => dispatch(confirmReservation())
    };
}

const Review = (props) => {

    function handleChangeMessage(e) {
        e.preventDefault();
        props.addMessage(e.target.value);
    }

    function handleGoToConfirm(e) {
        e.preventDefault();
        props.calculateReservationCost();
        props.goToConfirm(props.goToConfirmation);

    }

    function handleConfirmReservation(e) {
        e.preventDefault();
        props.confirmReservation();

    }

    const footerComponent = () => {
        if (!props.goToConfirmation) {
            return (
                <>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Say Hello to your host</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={e => handleChangeMessage(e)} />
                        </Form.Group>
                    </Form>
                    <Button variant="success" size="lg" onClick={e => handleGoToConfirm(e)}>Continue</Button>{' '}
                </>
            )
        } else {
            return (
                <Button variant="success" size="lg" onClick={e => handleConfirmReservation(e)}>Confirm your reservation</Button>
            )
        }
    }

    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>Review trip details and adjust options if needed</Card.Title>
                        <Row>
                            <Col lg="6" sm="6" md="6" xs="6">
                                <ListGroup>
                                    <ListGroup.Item>Dates :</ListGroup.Item>
                                    <ListGroup.Item>Guests :</ListGroup.Item>
                                    <ListGroup.Item>Trip duration :</ListGroup.Item>
                                    <ListGroup.Item>Base Price :</ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col lg="6" sm="6" md="6" xs="6">
                                <ListGroup>
                                    <ListGroup.Item>{props.formInputs.checkIn} to {props.formInputs.checkOut} </ListGroup.Item>
                                    <ListGroup.Item>{props.formInputs.guests} guest </ListGroup.Item>
                                    <ListGroup.Item>11 nights</ListGroup.Item>
                                    <ListGroup.Item>{props.info.base_price} </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {footerComponent()}
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

// export default Review;
const connectedReview = connect(mapStateToProps, mapDispatchToProps)(Review);
export default connectedReview;