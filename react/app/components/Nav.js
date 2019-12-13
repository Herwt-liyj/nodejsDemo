import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
class Nav extends Component {

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/home">home</Link>
                        </li>
                        <li>
                            <Link to="/login">login</Link>
                        </li>
                    </ul>
                    {/* <nav>

                <a href='#/home'>Home页面</a>
                <a href='#/login'>Login页面</a>
                <a href='#/detail'>Detail页面</a>
                <a href='#/list'>List页面</a>
            </nav> */}
                </div>
            </Router>

        )
    }
}
export default Nav;
