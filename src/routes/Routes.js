import React from 'react';
import { Route } from 'react-router-dom';

// Components
import NavBar from './../components/NavbarComponent';

export const UnprotectedRoutes = ({component: Component, ...rest}) => {
  
  const { pageTitle } = rest; // Gets the page title from the App router

  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <div>
            <NavBar pageTitle={pageTitle} />
            <Component {...props} />
          </div>
        )
      }}
    />
  )
};