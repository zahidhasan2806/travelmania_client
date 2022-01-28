import React from 'react';
import { Container } from 'react-bootstrap';
import dashboard from '../../../Images/dashboard.png'

const DashboardHome = () => {
    return (
        <Container className='d-flex align-items-center justify-content-center mt-5'>
            <div>
                <h3 className='text-center'>WelCome To TravelMania</h3>
                <img src={dashboard} alt="" />
            </div>
        </Container>
    );
};

export default DashboardHome;