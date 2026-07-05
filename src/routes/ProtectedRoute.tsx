import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../components/utils/auth";

const ProtectedRoute: React.FC = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/authLogin" replace />;
};

export default ProtectedRoute;