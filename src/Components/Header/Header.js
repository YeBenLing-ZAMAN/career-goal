import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import CustomLink from './CustomLink';
import './Header.css';
const Header = () => {
    return (
        <div className='sticky-sm-top'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        AIM |<span className=''> Foucs Terget</span>
                        <span className='d-none d-md-block text-sm'>Helping tell their career storices and get hired</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto nav-continer d-flex align-items-center">
                            <CustomLink to="/">Home</CustomLink>
                            <CustomLink to="/course">Course</CustomLink>
                            <CustomLink to="/contact">Contact</CustomLink>
                            <CustomLink to="/blogs">Blogs</CustomLink>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            </NavDropdown> */}
                            <CustomLink to='/login'>Log In</CustomLink>
                            <CustomLink to="/signup" className='btn btn-danger rounded-pill px-4 text-light'>Sign Up</CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;

