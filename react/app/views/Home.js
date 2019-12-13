import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../components/Nav';
import Footer  from '../components/Footer';
import Form from '../components/Form';
class Home extends Component {
    render() {
        return (
            <div>
                {/* Link实质就是渲染为a标签 */}
                {/* <section>
                    <h2>表单</h2>
                    <Form />
                </section>
                    <Link to="/login">goLogin登录页面</Link>
                <h1>
                    <button onClick={() => this.props.history.push({
                        pathname: '/login',
                        state: {
                            user: 'Herwt'
                        }
                    })}>goLogin登录页面</button>
                </h1>
                <h1><button onClick={() => this.props.history.push('list')}>通过函数跳转</button></h1>
                <h1><a href="#/detail">Detail页面</a></h1> */}
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">login</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Home;