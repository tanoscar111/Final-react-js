import React from 'react';
import {
  Route,
  Redirect,
} from "react-router-dom";
import HeaderAdmin from '../Page/Admin/HeaderAdmin';


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
          <HeaderAdmin />
          <Component {...routerProps} />
        </>
      )}
    />




  );
}

export default AdminDefaultLayout;
