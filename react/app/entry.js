//入口文件entry.js
var title = require('./components/title.jsx')

console.log('entryjs ----')
document.body.appendChild(title())

var test = require('./components/test.js');

document.body.appendChild(test());

//react

import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/hello.jsx';

function main() {
    ReactDOM.render(<Hello /> , document.getElementById('app'));
}

main();