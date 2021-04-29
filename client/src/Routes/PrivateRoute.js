import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from './context/context.js';
import { AuthContext } from './context/authContext.js';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useAuth()
  const { auth, setAuthData } = useContext(AuthContext);
  const { loginSwitch } = useContext(AppContext);

  if (auth.loading) {
    return (
      <Route
        render={() => {
          return (
            <h2>Loading...</h2>
          );
        }}
      />
    )
  }

  return auth.data ? <Component /> : <Redirect to='/home' />;

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          loginSwitch(true);
          // <Redirect to='/' />
        )
      }
    />
  );
};

export default PrivateRoute;
