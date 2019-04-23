import React, { Component, PropTypes } from 'react';
import api from '../../api/api';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    // async componentDidMount() {
    //     try
    //     {
    //         let res = await api.get('/user/list');
    //         let { users } = res.data;
    //         this.setState({ users: users });
    //     }
    //     catch (err) {
    //         throw err;
    //     }
    // }

    render() {
        let { users } = this.state;
        return (
            <div>
                <h1>Users</h1>
                {
                    (Array.isArray(users) && users.length) ?
                    <ul>
                        {
                            users.map((u, i) => <li key={i}>{u.fullName}</li>)
                        }
                    </ul>
                    : null
                }
            </div>
        );
    }
}

Users.propTypes = {
    users: PropTypes.array,
    getUserList: PropTypes.func
};

export default Users;
