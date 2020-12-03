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
                        <Link to='/' className="link">About us</Link>
                        <Link to='/' className="link">Contacts</Link>

                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header;