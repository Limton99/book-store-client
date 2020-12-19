import React, {useEffect, useState} from 'react';

import './header.css';
import {Button, Form, FormControl, Navbar, Nav, Badge} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logOut} from "../../store/actions/authActions";
import {search} from "../../store/actions/bookActions";
import {getCart} from "../../store/actions/cartActions";

const onMount = props => () => {
    props.getCart();
}

const Header = (props) => {

    useEffect(onMount(props), []);

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
                        <Link to="/cart" className="link">
                            {/*<Badge badgeContent={props.nrOfItemsInCard} color="primary">*/}
                            Cart
                            {/*</Badge>*/}
                            (${props.total})
                        </Link>

                    </Nav>
                    {loginStatement()}
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

const mapStateToProps = state => ({
    isAuth: state.authReducer.isAuth,
    total: state.cartReducer.orderTotal
})

const mapDispatchToProps = {
    logOut,
    search,
    getCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);