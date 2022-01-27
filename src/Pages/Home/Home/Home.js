import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Navigation from '../../../Component/Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import TopSpots from '../TopSpots/TopSpots/TopSpots';
import UsersExperiences from '../UsersExperiences/UsersExperiences/UsersExperiences';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Row className='m-0 p-0'>
                <Col md={8}>
                    <UsersExperiences />
                </Col>

                <Col md={4} className='border-start'>
                    <TopSpots />
                </Col>
            </Row>
        </div>
    );
};

export default Home;