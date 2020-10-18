import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Component/Home'
import DefautHome from './Page/DefautHome'
import LoginPage from './Page/LoginPage'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from "react-router";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import myReducer from './Redux/Reducers/index';
import logger from 'redux-logger'
import history from './history';
import {
  Switch,
} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from './Component/Login'
import ListPage from './Page/ListPage';
import Main from './Component/Main';
import './App.css';
// sagas
import createSagaMiddleware from 'redux-saga';
import mySaga from './Redux/Sagas'
import ProductDetail from './Component/ProductDetail';
const sagaMiddleware = createSagaMiddleware()
const myStore = createStore(myReducer,
  applyMiddleware(...[sagaMiddleware,logger]));
sagaMiddleware.run(mySaga)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <Router history={history}>
        <Switch>
          <DefautHome exact path="/" component={Home} />
          <ListPage exact path="/About" component={Main} />
          
          <LoginPage exact path='/login' component={Login} />
          <ListPage exact path="/About/:id" component={ProductDetail} />


        </Switch>
      </Router>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
