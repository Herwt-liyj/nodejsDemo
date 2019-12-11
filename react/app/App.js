//入口文件entry.js
// import Hello from './components/hello.jsx';
// import Home from './views/Home';
// var title = require('./components/title.jsx')

// console.log('entryjs ----')
// document.body.appendChild(title())

// var test = require('./components/test.js');

// document.body.appendChild(test());
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import Nav from './components/Nav';
import Footer  from './components/Footer';

//react
class App extends Component {
    render() {
        return (
            <div>
                <h1>导航首页</h1>
                <section className='header'>
                    <Nav />
                </section>
                {/* <section className='footer'>
                    <Footer />
                </section> */}
            </div>
        )
    }
}
export default App;


