import { faFacebook, faInstagram, faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='main-footer'>

            <Container>
                < Row >
                    <Col md={5}>
                        <div className='text-white px-5 pt-4'>
                            <h5 className='text-uppercase mb-3'>Travel<span className='main-font-color'>Sphere</span></h5>
                            <p>Welcome to your personal vacation matchmaker. WanderFinder helps you find the perfect destination to suit your style.Welcome to your personal vacation matchmaker and find the perfect destination to suit your style.</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='px-5 pt-4 text-center text-white'>
                            <h5 className='mb-3 text-uppercase'>Quick Links</h5>

                            <NavLink to='/home' className='text-white text-decoration-none fs-6'>Home</NavLink><br />
                            <NavLink to='/feedback' className='text-white text-decoration-none fs-6'>Share Your Exoerience</NavLink><br />

                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='px-5 pt-4  text-white'>
                            <h5 className='mb-3 text-uppercase'>Address</h5>
                            <p>59,Gm Bari North Badda <br />Dhaka, Bangladesh</p>

                            <h6>Follow us-</h6>
                            <hr />
                            <a href="https://twitter.com/?lang=en"><FontAwesomeIcon className='text-info fs-5 mx-1' icon={faTwitter} /></a>

                            <a href="https://www.facebook.com/"><FontAwesomeIcon className='text-primary fs-5 mx-1' icon={faFacebook} /></a>

                            <a href="https://www.instagram.com/"><FontAwesomeIcon className='text-danger fs-5 mx-1' icon={faInstagram} /></a>

                            <a href="https://www.skype.com/en/"><FontAwesomeIcon className='text-info fs-5 mx-1' icon={faSkype} /></a>


                        </div>
                    </Col>
                </Row >
                <hr className='text-white' />

                <p className="text-white text-center text-opacity-75 m-0">Copyright &copy;2022 All Rights Reserved | This Website is made  by Md Zahid Hasan </p>

            </Container >

        </div >
    );
};

export default Footer;