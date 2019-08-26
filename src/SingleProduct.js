import React, { Component } from 'react'
import { Row,Col } from 'react-bootstrap'
import axios from "axios";


class SingleProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            product:[]
        }
    }
    componentDidMount() {

    }

    componentWillMount() {
        const {abc}=this.props.match.params;
        console.log("match ",this.props.match);
         console.log("abc value",abc);



        axios.get('/products/'+abc)
            .then((response) =>{
                console.log("response",response);
                return response.data

            }).then((product) =>{
            console.log("product val",product);
            const newproduct = product;
            this.setState({
                product: newproduct
            })
         })

    }

    renderRow() {

            return(
                <Col >
                   <div className="card" >
                            <img className="card-img-top" alt="" title={this.state.product.name} src={`https://greencommunitylaundry.herokuapp.com/api/images/${this.state.product.image}`} />
                            <div className="card-body">
                                <h5 className="card-title">{this.state.product.name}</h5>
                                <p className="card-text">{this.state.product.description}</p>
                                <p className="card-text">Price: {this.state.product.price}</p>

                            </div>
                        </div>

                </Col>
            )

    }
    render() {
        return (
            <Row>
                {this.renderRow()}
            </Row>
        )
    }
}
export default SingleProduct