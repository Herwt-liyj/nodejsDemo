//入口文件entry.js
// var title = require('./components/title.jsx')

// console.log('entryjs ----')
// document.body.appendChild(title())

// var test = require('./components/test.js');

// document.body.appendChild(test());
import React from 'react';
import ReactDOM from 'react-dom';


import Hello from './components/hello.jsx';
import Home from './views/Home';
import routes from './routes';

//react
function main() {
    console.dir('react main')
    ReactDOM.render(
        routes, document.getElementById('app')
    );
}

main();



