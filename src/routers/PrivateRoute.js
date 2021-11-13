import React from "react";
import { Navigate, useLocation } from "react-router";
import PropTypes from "prop-types";

export const PrivateRoute = ({ isAuthenticated, element }) => {
  const location = useLocation();
  console.log(location);
  localStorage.setItem("lastPath", location.pathname + location.search);
  return isAuthenticated ? element : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  element: PropTypes.object.isRequired,
};
