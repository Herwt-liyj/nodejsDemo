import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {

    render() {
        return (
            <nav>
                <Link to='/'>Home页面</Link>
                <Link to='/home'>Home页面</Link>
                <Link to='/login'>Login页面</Link>
                <Link to='/detail'>Detail页面</Link>
                <Link to='/list'>List页面</Link>
            </nav>
        )
    }
}

export default Nav;
