import React, { Component } from 'react'
import {Container,Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';

import { NavLink } from 'react-router-dom'
//import Content from './Content'
export default class Header extends Component{

    render (){
        return(
            <header>
                <Container fluid={true} style={{paddingLeft:'0px',paddingRight:'0px'}}>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home">{this.props.title}</Navbar.Brand>
                        <Nav className="mr-auto">

                            <NavLink activeStyle={{
                                textDecoration:'Underline'
                            }} exact activeClassName='active'  to='/' className='nav-link' >Home</NavLink>
                            <NavLink activeStyle={{
                                textDecoration:'Underline'
                            }} activeClassName='active' to='/about' className='nav-link' >About</NavLink>
                            <NavLink activeStyle={{
                                textDecoration:'Underline'
                            }} activeClassName='active' to='/products' className='nav-link' >Products</NavLink>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar>
                </Container>
            </header>
        )
    }
}