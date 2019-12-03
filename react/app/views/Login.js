import React, { Component } from 'react';

class Login extends Component {

    componentDidMount() {
        //console.log(this.props.match.params);
        console.log(this.props.history.location.state);
    }

    
    render() {
        return (
            <h1>Login</h1>
        )
    }
    
    
}

export default Login;