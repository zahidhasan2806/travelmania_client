import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Footer from '../../../Component/Shared/Footer/Footer';
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
                <Col md={8} className='my-5'>
                    <UsersExperiences />
                </Col>

                <Col md={4} className='border-start my-5'>
                    <TopSpots />
                </Col>
            </Row>
            <Footer />
        </div>
    );
};

export default Home;