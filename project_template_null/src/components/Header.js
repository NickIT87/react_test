import React, { Component } from 'react'
import { Navbar, Container } from 'react-bootstrap'
import logo from './logo192.png'

class Header extends Component {
    render(){
        return (
            <Navbar>
                <Container>
                    <Navbar.brand href="/">
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.brand>
                    <Navbar.Toggle aria-controls="responcive-navbar-nav" />
                    <Navbar.Collapse id="responcive-navbar-nav"/>
                </Container>
            </Navbar>
        )
    }
}

export default Header