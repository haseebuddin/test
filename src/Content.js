import React, { Component } from 'react'
import { Row,Col,Container } from 'react-bootstrap'
import {NavLink} from "react-router-dom";
import axios from 'axios';
// import image from 'giphy.gif';

class Content extends Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0,
                products: [],
                loading:true
            }
        }
    componentDidMount(){

    }
        componentWillMount() {
            axios.interceptors.request.use((config) => {
                // Do something before request is sent
                // console.log(config);
                // alert("tst");

                return config;

            }, (error) => {
                // Do something with request error
                return Promise.reject(error);
            });
            axios.get(`/products`)
            .then((response) =>{
                    // return response
                console.log(response);
                return response.data;
                }).then((products) =>{

                    // console.log(data);
                    const newProducts = products.map(({_id, name, description, price,image}) =>{
                        return {_id, name, description, price,image}
                });
            // axios.get(`/products/images/566c3191074e330300605485`).
            // then((responseva) =>{
            //    console.log("image response",responseva.data);
            // });
            this.setState({
                    products: newProducts,
                    loading:false
                })
            })
        }
        increment() {
            this.setState({
                count: this.state.count +1
            })
        }

    renderRow() {
        return this.state.products.map((product, i) =>{
            return(
                <Col key={product._id} md={4} className="mb-3 mt-3">
                    <NavLink to={`/product/${product._id}`}>
                        <div className="card" >
                            <img className="card-img-top" title={product._id} src={`https://greencommunitylaundry.herokuapp.com/api/images/${product.image}`} alt={product.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    {/*<p className="card-text">{product.description}</p>*/}
                                    <p className="card-text">Price: ${product.price}</p>
                                    {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                                </div>
                        </div>
                    </NavLink>
                </Col>
            /*{<tr key={product. id}>
                <td>{i}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
            </tr>}*/
            )
        })
    }
        render() {
                return (
                    <Container>
                        <Row>
                            {this.renderRow()}
                        </Row>
                    </Container>
                )

        }

    }
export default Content


/*{                <Table style={{marginTop:'30px'}} striped bordered hover>
                    <thead>
                    <tr>
                        <th>
                            <button onclick={()=>{

                            }}>
                                increment
                            </button>
                        </th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderRow()}
                    </tbody>
                </Table>}*/