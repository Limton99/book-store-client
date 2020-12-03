import React from 'react';

import './header.css';
import { Button, Form, FormControl, Navbar, Nav } from 'react-bootstrap';
import {Link} from "react-router-dom";

const Header = () => {


    return (
        <header>
            <Navbar  expand="lg" className="nav">
                <Navbar.Brand href="" style={{color: 'grey'}}>BSHOP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to='/' className="link">Home</Link>
                        <Link to='/books' className="link">Books</Link>
                        <Link to='/about' className="link">About us</Link>
                        <Link to='/contact' className="link">Contacts</Link>

                    </Nav>
                    <Form inline>
                        <Link to='/login' className="link">Login</Link>
                        <Link to='/register' className="link">Register</Link>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header;