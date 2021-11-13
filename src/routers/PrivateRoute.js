import React from "react";
import { Navigate } from "react-router";
import PropTypes from "prop-types";

export const PrivateRoute = ({ isAuthenticated, element }) => {
  console.log(isAuthenticated);

  return isAuthenticated ? element : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  element: PropTypes.object.isRequired,
};
