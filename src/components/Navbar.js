import React from 'react';
import { Row, Col, Image } from "react-bootstrap";
import {
    Link
} from "react-router-dom";
import fleche from '../assets/fleche.jpg';
import '../styles/navbar.css';
import { connect } from 'react-redux';
import { goToConfirm, goBack } from '../actions/index';


function mapStateToProps(state) {
    return {
        error: state.error,
        goToConfirmation: state.goToConfirmation
    };
}

const mapDispatchToProps = dispatch => {
    return {
        goToConfirm: () => dispatch(goToConfirm()),
        goBack: () => dispatch(goBack())
    };
}

const Navbar = (props) => {

    function handleGoBack() {
        props.goBack();
    }

    const ConfirmLink = () => {
        if (!props.goToConfirmation) {
            return (
                <span className="item">Confirm</span>
            )
        } else {
            return (
                <Link to="/confirm" className="item">Confirm</Link>
            )
        }
    }

    return (
        <Row className="justify-content-center navbar" >
            <Col lg="3" className="cols">
                <Link to="/review" className="item" onClick={handleGoBack}>Review</Link>
            </Col>
            <Col lg="3" className="cols">
                <Image src={fleche} className="item" thumbnail style={{ width: '40px' }} />
            </Col>
            <Col lg="3" className="cols">
                {ConfirmLink()}
            </Col>
            <Col lg="3" className="cols">
                <Image src="http://dummyimage.com/241x240.jpg/ff4444/ffffff" className="profile" roundedCircle style={{ width: '100px' }} />
            </Col>
        </Row>
    )
}

const ConnectedNavbar = connect(mapStateToProps, mapDispatchToProps)(Navbar);
export default ConnectedNavbar;