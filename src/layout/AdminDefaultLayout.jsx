import React from 'react';
import {
  Route,
  Redirect,
} from "react-router-dom";
import Nav from '../Component/Nav';


function AdminDefaultLayout({ component: Component, ...props }) {
  const authData = JSON.parse(localStorage.getItem("myValueInLocalStorage"))
  
  if (!authData || authData.role !== 'admin') {
    return <Redirect to="/" />
  }

  return (
    <Route
      {...props}
     
      render={(routerProps) => (
        <>
          <Nav />
          <Component {...routerProps} />
        </>
      )}
    />




  );
}

export default AdminDefaultLayout;
