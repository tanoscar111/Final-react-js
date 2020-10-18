import React from 'react';
import {
  Route,
} from "react-router-dom";
import Main from '../../Component/Main';
import Nav from '../../Component/Nav';
import ScrollToTop from '../../ScrollTotop';

function ListPage({ component: Component, ...props }) {

  return (
    <Route
      {...props}
     
      render={(routerProps) => (
        <>
        <ScrollToTop/>
          <Nav />
          {/* <Main /> */}
          <Component {...routerProps} />
        </>
      )}
    />




  );
}

export default ListPage;
