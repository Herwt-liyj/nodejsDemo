//入口文件entry.js
// import Hello from './components/hello.jsx';
// import Home from './views/Home';
// var title = require('./components/title.jsx')

// console.log('entryjs ----')
// document.body.appendChild(title())

// var test = require('./components/test.js');

// document.body.appendChild(test());
// import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Nav from './components/Nav';
// import Footer from './components/Footer';
// // import './App.css';

// //react
// class App extends Component {
//     render() {
//         return (

//             <div>
//                 <h1>导航首页</h1>
//                 <section className='header'>
//                     <Nav />
//                 </section>
//                 <section className='footer'>
//                     <Footer />
//                 </section>

//                 <div>
//                     <h1>--------------内容展示区-----------------</h1>
//                 </div>
//             </div>

//         )
//     }
// }
// export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyRoutes from './routes/index';

import Home from './views/Home.js';
import Login from './views/Login.js';
import List from './views/List.js';
import Detail from './views/Detail.js';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">App</Link>
                        </li>
                        <li>
                            <Link to="/home">home</Link>
                        </li>
                        <li>
                            <Link to="/login">login</Link>
                        </li>
                    </ul>

                    <hr />
                    <div>
                        <h1>内容展示区</h1>
                        <MyRoutes />
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;
