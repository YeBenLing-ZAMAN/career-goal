import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import CustomLink from './CustomLink';
import './Header.css';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div className='sticky-sm-top'>
            {
                (loading) && <Loading></Loading>
            }
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        AIM |<span className=''> Foucs </span>
                        <span className='d-none d-md-block text-sm'>Helping to make your career as a developer</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto nav-continer d-flex align-items-center">
                            <CustomLink to="/">Home</CustomLink>
                            <CustomLink to="/course">Course</CustomLink>
                            <CustomLink to="/about">About</CustomLink>
                            <CustomLink to="/blogs">Blogs</CustomLink>
                            {
                                user
                                    ?
                                    <CustomLink to='/' onClick={logout} className='btn btn-danger rounded-pill px-4 text-light'>Log out</CustomLink>
                                    :
                                    <>
                                        <CustomLink to='/login'>Log In</CustomLink>
                                        <CustomLink to="/signup" className='btn btn-danger rounded-pill px-4 text-light'>Sign Up</CustomLink>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;

