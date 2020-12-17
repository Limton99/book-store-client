import React, {useState} from 'react';

import './header.css';
import { Button, Form, FormControl, Navbar, Nav } from 'react-bootstrap';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logOut} from "../../store/actions/authActions";
import {search} from "../../store/actions/bookActions";

const Header = (props) => {

    // console.log(props.isAuth)
    const loginStatement = () => {
        if (!props.isAuth) {
            return (
                <Form inline>
                    <Link to='/login' className="link">Login</Link>
                    <Link to='/register' className="link">Register</Link>
                </Form>
            )
        }

        return (
            <Form inline>
                <Button onClick={props.logOut} className="link">Logout</Button>

            </Form>
        )
    }

    const onSearch = (value) => {
        props.search(value)

    }

    const onChange = (e) => onSearch(e.target.value)




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
                        <form >
                            <input type="text" name='search'  onChange={onChange} />
                            <button onSubmit={onSearch}>Submit</button>
                        </form>

                    </Nav>
                    {loginStatement()}
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

const mapStateToProps = state => ({
    isAuth: state.authReducer.isAuth
})

const mapDispatchToProps = {
    logOut,
    search
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);