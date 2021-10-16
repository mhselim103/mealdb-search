import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Nav className="mx-auto">
                        <NavLink to="/home"
                            className="text-white me-5 fw-bold fs-2 text-decoration-none"
                        >Home</NavLink>
                        <NavLink to="/About"
                            className="text-white me-5 fw-bold fs-2 text-decoration-none"
                        >About</NavLink>
                        <NavLink to="/features"
                            className="text-white me-5 fw-bold fs-2 text-decoration-none"
                        >Features</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;