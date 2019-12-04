import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../components/Nav';
import Footer  from '../components/Footer'
class Home extends Component {
    render() {
        return (
            <div>
                <h1>导航首页</h1>
                <section className='header'>
                    <Nav />
                </section>
                {/* Link实质就是渲染为a标签 */}
                <Link className='link-a' to='/detail'>Home页面</Link>
                <h1>
                    <a href="#/home">Home页面</a></h1>
                <h1>
                    <button onClick={() => this.props.history.push({
                        pathname: '/login',
                        state: {
                            user: 'Herwt'
                        }
                    })}>goLogin登录页面</button>
                </h1>
                <h1><button onClick={() => this.props.history.push('list')}>通过函数跳转</button></h1>
                <h1><a href="#/detail">Detail页面</a></h1>
                <section className='footer'>
                    <Footer />
                </section>
            </div>
        )
    }
}

export default Home;