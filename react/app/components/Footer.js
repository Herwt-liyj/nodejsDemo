import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return <footer>
            <h1>底部导航栏</h1>
            <div>
                <Link to='/'>Home页面</Link>
                <Link to='/home'>Home页面</Link>
                <Link to='/login'>Login页面</Link>
                <Link to='/detail'>Detail页面</Link>
                <Link to='/list'>List页面</Link>
            </div>
        </footer>
    }
}

export default Footer