import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './Page/LoginPage'
import AdminLogin from './Page/Admin/Login'
import AdminProductList from './Page/Admin/ProductList'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from "react-router";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import myReducer from './Redux/Reducers/index';
import logger from 'redux-logger'
import history from './history';

import 'antd/dist/antd.css'; 
import {
  Switch,
} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from './Component/Login'
import ApartmentListPage from './Page/User/ApartmentList';
import ApartmentDetailPage from './Page/User/ApartmentDetail';

import AdminDefaultLayout from './layout/AdminDefaultLayout';
import Manager from './Page/Admin/Manager'
import DefaultLayout from './layout/DefaultLayout';
import HomeLayout from './layout/HomeLayout';

import Home from './Page/User/Home';
import HostPage from './Page/User/HostPage'
import './App.css';
// sagas
import createSagaMiddleware from 'redux-saga';
import mySaga from './Redux/Sagas'
import DetailAdmin from './Component/DetailAdmin';
import HostDefaultLayout from './layout/HostDefaultLayout';
const sagaMiddleware = createSagaMiddleware()
const myStore = createStore(myReducer,
  applyMiddleware(...[sagaMiddleware,logger]));
sagaMiddleware.run(mySaga)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <Router history={history}>
        <Switch>
          <LoginPage exact path="/admin/login" component={AdminLogin} />
          <LoginPage exact path='/login' component={Login} />

          <HomeLayout exact path="/" component={Home} />
          <DefaultLayout exact path="/apartments" component={ApartmentListPage} />
          <DefaultLayout exact path="/apartment/:id" component={ApartmentDetailPage} />

          <AdminDefaultLayout exact path="/admin/apartments" component={AdminProductList} />
          <AdminDefaultLayout exact path="/admin/apartment/:id" component={DetailAdmin} />
          <AdminDefaultLayout exact path="/admin/manager" component={Manager}/>


          <HostDefaultLayout exact path="/host" component={HostPage}/>
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
