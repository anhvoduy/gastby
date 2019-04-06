import React, { Component } from 'react';
import Link from 'gatsby-link';
import Users from '../components/users';

export class Container extends Component {
  constructor(props) {
      super(props);
  }

  componentWillMount() {
      document.title = 'Users';
  }

  render() {
      return (
        <div>
          <p>Welcome to user page</p>
          <Users />
          <Link to="/">Go back to the home page</Link>
        </div>
      );
  }
}


export default Container;