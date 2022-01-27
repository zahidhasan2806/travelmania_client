import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth()
    return (
        <Navbar collapseOnSelect expand="lg" style={{ background: "#060b26" }} variant="dark" className='navItem '>
            <Container className='py-2'>
                <Navbar.Brand href="#home" className=' text-white fs-4 f fw-bold fst-italic'>TravelMania</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/home" className='text-white fw-bold fs-6 ' >Home</Nav.Link >
                        <Nav.Link as={NavLink} to="/blogform" className='text-white fw-bold fs-6 ' >Feedback</Nav.Link >
                        {
                            !user?.email ?
                                <Nav.Link as={NavLink} to="/login" className='text-white fw-bold fs-6 '>Login</Nav.Link> :
                                <>
                                    <Nav.Link as={NavLink} to="/dashboard" className='text-white fw-bold fs-6 '>
                                        Dashboard
                                    </Nav.Link>
                                    <Button as={NavLink} to="/home" onClick={logOut} variant="dark">Log-out</Button>
                                    <Navbar.Text className="ms-2">
                                        <a className="text-decoration-none text-white fw-bold fs-6" href="#login" >{user?.displayName}</a>
                                    </Navbar.Text>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Navigation;