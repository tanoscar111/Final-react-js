import React from 'react';
import { Route } from "react-router-dom";

import Nav from '../Component/Nav'
import Footer from '../Component/Footer';

import './styles.css';

function DefaultLayout({ component: Component, ...props }) {
  return (
    <Route
      {...props}
      render={(routerProps) => (
        <div className="default-layout-container">
          <Nav />
          <div className="default-layout-content">
            <Component {...routerProps} />
          </div>
          <Footer />
        </div>
      )}
    />
  );
}

export default DefaultLayout;
