import React, { useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import { AppContext } from './context/context.js';
import { useAuth } from "./context/authContext.js";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useAuth()
  const { loginSwitch } = useContext(AppContext);
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          loginSwitch(true);
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
