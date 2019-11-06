import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Info from './info';
import Biology from './biology';
import type from './type';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router,Route,Link,browserHistory} from 'react-router';
ReactDOM.render(
    <Router history = {browserHistory}>
        <Route path = "/" component ={App}/>
        <Route path = "/info" component ={Info}/>
        <Route path = "/biology" component ={Biology}/>
        <Route path = "/type" component ={type}/>
    </Router>,document.getElementById('root')
    );
serviceWorker.unregister();
