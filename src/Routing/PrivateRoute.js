import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRoute";

const PrivateRoute = ({ component: Component, props, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      AuthenticatedRoute.getAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
