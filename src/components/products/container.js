import React, { Component, PropTypes } from 'react';
import api from '../../api/api';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    async componentDidMount() {
        try
        {
            let res = await api.get('/product/list');
            let { products } = res.data;
            this.setState({ products: products });
        }
        catch (err) {
            throw err;
        }
    }

    render() {
        let { products } = this.state;
        return (
            <div>
                <h1>Products</h1>
                {
                    (Array.isArray(products) && products.length) ?
                    <ul>
                        {
                            products.map((u, i) => 
                            <li key={i}>
                                <div>
                                    {u.ProductName}
                                </div>
                                <div>
                                    {u.ImageUrl}
                                </div>
                            </li>)
                        }
                    </ul>
                    : null
                }
            </div>
        );
    }
}

Products.propTypes = {
    products: PropTypes.array,
    getProductList: PropTypes.func
};

export default Products;
