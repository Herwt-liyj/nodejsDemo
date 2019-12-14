import React from 'react';
import { BrowserRouter as Router, Switch, HashRouter, Route, Link } from "react-router-dom";
import Home from '../views/Home.js';
import Login from '../views/Login.js';
import List from '../views/List.js';
import Detail from '../views/Detail.js';

// const RouteConfig = [
//     {
//         path: 'home',
//         component: Home,
//         name: '首页'
//     },
//     {
//         path: 'login',
//         component: Login,
//         name: '登录'
//     },
//     {
//         path: 'List',
//         component: List,
//         name: '列表展示'
//     },
//     {
//         path: 'Detail',
//         component: Detail,
//         name: '详情'
//     }
// ]
// const MyRoutes = (
//     <HashRouter>
//         <Switch>
//             <Route path='/' component={App} />
//             <Route path='/home' component={Home} />
//             <Route path='/login' component={Login} />
//             <Route path='/list' component={List} />
//             <Route path='/detail' component={Detail} />
//         </Switch>
//     </HashRouter>
// )

const MyRoutes = () => (
    <Switch>
        <Route path="/home">
            <Home />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/list">
            <List />
        </Route>
        <Route path="/detail">
            <Detail />
        </Route>
    </Switch>
);
export default MyRoutes;