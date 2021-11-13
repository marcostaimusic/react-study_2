import React, { useContext } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LoginScreen } from "../Components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { AuthContext } from "../auth/AuthContext";
import { PublicRoute } from "./PublicRoute";
export const AppRouter = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <>
        <Routes>
          <Route
            path="/*"
            element={
              <PrivateRoute
                isAuthenticated={user.logged}
                element={<DashboardRoutes />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute
                isAuthenticated={user.logged}
                element={<LoginScreen />}
              />
            }
          />
        </Routes>
      </>
    </Router>
  );
};
