import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/SHIVAY.png'
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Header = () => {
    return (
        <>
        <div className='bg_color'>
        <div className='text-center'>
           <a href="/"><img src={logo} alt="logo" width="150px" height="175px"/></a>
        </div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand to="/">STPF</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
                        <Nav className="me-5">
                            <Link className="me-2" to="/">HOME</Link>
                            <Link className="me-2" to="/portfolio">PORTFOLIO</Link>
                            <Link className="me-2" to="/services">SERVICES</Link>
                            <Link to="/contact">ENQUIRE</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        </>
    )
}

export default Header
