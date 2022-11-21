import axios from 'axios';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'react-bootstrap';
import CourseList from '../components/CourseList';
import Header from '../components/Header';
import Menu from '../components/Menu';


const CourseApplyList = () => {
    return(
        <div>
            <Header/>
            <Container>
                <Row>
                    <Col><Menu/></Col>
                    <Col><CourseList/></Col>
                </Row>
            </Container>
        </div>
    );
};

  
export default CourseApplyList;