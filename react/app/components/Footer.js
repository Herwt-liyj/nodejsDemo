import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';

class Footer extends Component {
    render() {
        return <footer>
            <h1>底部导航栏</h1>
            <div>
                <nav>
                    <a href='#/home'>Home页面</a>
                    <a href='#/login'>Login页面</a>
                    <a href='#/detail'>Detail页面</a>
                    <a href='#/list'>List页面</a>
                </nav>
            </div>
        </footer>
    }
}

export default Footer