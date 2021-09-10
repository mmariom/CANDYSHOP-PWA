import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav,Container} from 'react-bootstrap'

const header = () => {
    return (
        <header>
            

            <Navbar bg="primary"  variant='dark' expand="lg" collapseOnSelect>
                <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand >CandyShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    <LinkContainer to='/cart'>
                        <Nav.Link ><i className="fas fa-shopping-basket"></i>  Cart</Nav.Link>
                    </ LinkContainer>
                    <LinkContainer to='login'>  
                        <Nav.Link ><i className='fas fa-user'></i>  Sign in</Nav.Link>
                      </LinkContainer>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


                       
        </header>
    )
}

export default header
