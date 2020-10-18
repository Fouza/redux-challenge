import React from 'react';
import Review from '../components/Review';
import Detail from '../components/Detail';
import { Container, Row, Col } from "react-bootstrap";

const Screen = (props) => {
    return (
        <Container>
            <Row>
                <Col><Review></Review></Col>
                <Col><Detail></Detail></Col>
            </Row>
        </Container>
    )
}

export default Screen;