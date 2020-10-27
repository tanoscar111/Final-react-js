import React from 'react';
import {
  Route,
  
} from "react-router-dom";
import Footer from '../Component/Footer';
import Nav from '../Component/Nav';


function HostDefaultLayout({ component: Component,  ...props }) {
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

export default HostDefaultLayout;