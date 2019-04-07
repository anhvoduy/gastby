import React, { Component } from 'react';
import Link from 'gatsby-link';
import Products from '../components/products';

export class Container extends Component {
  constructor(props) {
      super(props);
  }

  componentWillMount() {
      document.title = 'Products';
  }

  render() {
      return (
        <div>
          <p>Welcome to product page</p>
          <Products />
          <Link to="/">Go back to the home page</Link>
        </div>
      );
  }
}


export default Container;