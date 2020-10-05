import React from 'react';
import ReactDOM from 'react-dom';

import HomePage from './Page/HomePage'
import LoginPage from './Page/LoginPage'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from "react-router";
import history from './history';
import {
  Switch,
} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from './Component/Login'
ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Switch>

        <HomePage exact path="/" component={HomePage} />
        <LoginPage exact path='/login' component={Login} />


      </Switch>
    </Router>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
