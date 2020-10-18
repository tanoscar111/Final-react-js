import React from 'react';
import {
  Route,
} from "react-router-dom";
import Main from '../../Component/Main';
import Nav from '../../Component/Nav';

function ListPage({ component: Component, ...props }) {

  return (
    <Route
      {...props}
     
      render={(routerProps) => (
        <>
          <Nav />
          <Main />
        </>
      )}
    />




  );
}

export default ListPage;
