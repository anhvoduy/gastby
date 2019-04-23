import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p><Link to="/users/">Go to User List</Link></p>
    <p><Link to="/products/">Go to Product List</Link></p>
    <p><Link to="/aboutus/">About Us</Link></p>
  </div>
)

export default IndexPage;
