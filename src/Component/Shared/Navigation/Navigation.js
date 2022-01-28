import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FiLogOut } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Navigation.css'



const Navigation = () => {
    const { user, logOut, admin } = useAuth();

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <Navbar collapseOnSelect expand="lg" fixed='top'
            className={colorChange ? 'navbar1 colorChange' : 'navbar1'}
        >
            <Container>
                <Navbar.Brand href="/home" className='nav-logo text-white'>Travel<span className='main-font-color'>Mania</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="ms-auto" defaultActiveKey="/home">
                        <NavLink to="/home" className="text-decoration-none mx-3 fs-5  menu-items">Home</NavLink>
                        <NavLink to="/blogform" className="text-decoration-none mx-3 fs-5  menu-items">Travel Experience</NavLink>
                        {
                            admin &&

                            <NavLink to="/dashboard" className="text-decoration-none mx-3 fs-5  menu-items">Dashboard</NavLink>
                        }

                    </Nav>


                    <NavDropdown title={<FontAwesomeIcon className='icon' icon={faUserAlt}></FontAwesomeIcon>} className=' user-btn ms-auto rounded-circle ' variant="none " >
                        {
                            user?.email ?
                                <NavDropdown.Item className="main-font-color dropdown-menu-items bg-none fw-bolder"><FontAwesomeIcon className='icon' icon={faUserAlt}></FontAwesomeIcon>{user.displayName}</NavDropdown.Item>

                                :
                                <NavDropdown.Item as={NavLink} to="/login" className="main-font-color chngbg dropdown-menu-items">Login</NavDropdown.Item>
                        }

                        {
                            user?.email ?
                                <NavDropdown.Item as={NavLink} to="/home" onClick={logOut} className="main-font-color chngbg dropdown-menu-items"><FiLogOut /> Logout</NavDropdown.Item>

                                :
                                <NavDropdown.Item as={NavLink} to="/register" className="main-font-color chngbg dropdown-menu-items">Register</NavDropdown.Item>
                        }

                    </NavDropdown>

                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Navigation;