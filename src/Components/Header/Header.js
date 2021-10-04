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
                        <Nav className="me-auto">
                            <Nav.Link>
                                <NavLink className="nav" to="/home">Home</NavLink>
                            </Nav.Link>
                            <Nav.Link to="/courses">
                                <NavLink className="nav" to="/courses">Courses</NavLink>
                            </Nav.Link>
                            <Nav.Link to="/about">
                                <NavLink className="nav" to="/about">About Us</NavLink>
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </nav>
        </div>
    );
};

export default Header;