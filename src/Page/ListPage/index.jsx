import React from 'react';
import {
  Route,
  Redirect,
} from "react-router-dom";
import Footer from '../../Component/Footer';
import Nav from '../../Component/Nav';


function ListPage({ component: Component, role, ...props }) {
  return (
    <Route
      {...props}
     
      render={(routerProps) => (
        <>
       
          <Nav  {...routerProps} />
          <Component {...routerProps} />
          <Footer/>
        </>
      )}
    />




  );
}

export default ListPage;
