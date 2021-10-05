import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import Navbar from 'react-bootstrap/Navbar'
import {Container, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <nav>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home" className='ms-5 me-5' ><h2 className='navbrand fw-bold'>Engish Buddy</h2></Navbar.Brand>
                        <Nav className="me-auto ms-5">
                            <Nav.Link>
                                <NavLink className="nav" to="/home">Home</NavLink>
                            </Nav.Link>
                            <Nav.Link to="/courses">
                                <NavLink className="nav ms-5" to="/courses">Courses</NavLink>
                            </Nav.Link>
                            <Nav.Link to="/about">
                                <NavLink className="nav ms-5" to="/about">About Us</NavLink>
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </nav>
        </div>
    );
};

export default Header;