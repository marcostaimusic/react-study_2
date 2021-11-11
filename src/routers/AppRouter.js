import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { LoginScreen } from "../Components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/*" element={<DashboardRoutes />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </>
    </Router>
  );
};
