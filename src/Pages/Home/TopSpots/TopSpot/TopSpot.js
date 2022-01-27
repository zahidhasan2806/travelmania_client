import React, { useState } from 'react';
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import './TopSpot.css'

const TopSpot = ({ spot }) => {

    const { picture1, picture2, name, location, desc, cost } = spot;
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (

        <Col md={12} sm={12} className="px-5 py-4">
            <div className='overlay'>
                <div className='all-spot-section'>
                    <img src={picture1} alt="" className='img-fluid d-block' />
                    <div className='bg-opacity-75 bg-dark card-div w-100 py-2'>
                        <h4>{name}</h4>
                        <p>{location}</p>
                    </div>
                    <Button onClick={handleShow} variant="none" className='view-details-spots'>
                        View Details
                    </Button>
                </div>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Container>
                    <Row style={{ "backgroundColor": "#060b26", "color": "white" }}>

                        <Col md={5} className="d-flex align-items-center justify-content-center  ps-5">
                            <img src={picture2} alt="" className='img-fluid' />

                        </Col>
                        <Col md={7}>
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter"
                                    style={{ "color": "white", "fontWeight": "600", "fontSize": "30px" }}
                                >
                                    {name}
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Card.Text className="text-start">

                                    {desc}
                                </Card.Text>
                                <Card.Text className="text-start fs-3">
                                    <span className='fs-5'> Cost: </span>
                                    ${cost} <span className='fs-5'> / per person </span>
                                </Card.Text>

                            </Modal.Body>

                            <Modal.Footer >
                                <Button as="NavLink" to="/home" onClick={handleClose} variant="none" className='rounded-0 fw-bold'
                                    style={{ "backgroundColor": "white", "color": "#bd2600" }}
                                >See Travellers Experience</Button>
                            </Modal.Footer>
                        </Col>
                    </Row>
                </Container>

            </Modal>
        </Col >
    );
};

export default TopSpot;