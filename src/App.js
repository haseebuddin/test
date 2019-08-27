import React, { Component } from 'react';
import {Container } from 'react-bootstrap';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from './Header'
import Home from './Home'
import About from './About'
import Products from './Products'
import Product from './SingleProduct'

class App extends Component{
    constructor(props){
        super(props);
        this.title='My app'
    }
  render() {
    return(
       <Container>
            <Router>
                <Header/>

                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/products' component={Products} />

                <Route path='/product/:id' component={Product} />
            </Router>
       </Container>
    )
  }
}

export default App;