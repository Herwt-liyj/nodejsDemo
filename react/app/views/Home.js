import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>
                    <a href="#/home">Home页面</a></h1>
                <h1>
                    <button onClick={
                        () => this.props.history.push({
                            pathname: '/login',
                            state: {
                                user: 'Herwt'
                            }
                        })}>goLogin登录页面</button>
                </h1>
                <h1><button onClick={() => this.props.history.push('list')}>通过函数跳转</button></h1>
                <h1><a href="#/detail">Detail页面</a></h1>
            </div>
        )
    }
}

export default Home;