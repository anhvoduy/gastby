import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p><Link to="/page-2/">Go to page 2</Link></p>
    <p><Link to="/users/">Go to User List</Link></p>
  </div>
)

export default IndexPage;
