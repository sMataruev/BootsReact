import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {Nav, NavLink, NavItem} from 'reactstrap';
import {Container, Col, Row, Button} from 'muicss/react';
import 'muicss/dist/css/mui.min.css';
import './Phone.scss';
import $ from 'jquery';


import 'normalize.css'
import MyCarousel from './MyCarousel';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css';

import Footer from "./Footer";

class Page extends Component {
    static propTypes = {};

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col>
                        <MyCarousel/>
                    </Col>
                </Row>
                <Row>
                    <Nav>
                        <NavItem>
                            <NavLink href="#">
                                <Button variant="flat" color="primary" size={'large'}>Samsung</Button>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                <Button variant="flat" color="primary" size={'large'}>Sony</Button>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                <Button variant="flat" color="primary" size={'large'}>Iphone</Button>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                <Button variant="flat" color="primary" size={'large'} id={'myBTN'} className={'animated infinite bounce'}>НАЖМИ МНЯ</Button>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Row>
                <Row>
                    <Col lg={4} md={4} className={'phone-img'}> phone</Col>
                    <Col lg={8} md={8} className={'phone-desc'}>description</Col>
                </Row>
                <Row>
                    <Col>
                        <Footer/>
                    </Col>
                </Row>
            </Container>
        );
    }

    componentDidMount=()=>{
        this.myFUN();
    }
    myFUN=()=>{
        $('#myBTN').on('click', function () {
            alert('Hello')
        })
    }
}

export default Page;