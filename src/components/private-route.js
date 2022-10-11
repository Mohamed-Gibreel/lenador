import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isUserLoggedIn } from "../features/auth/authSlice";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = useSelector(isUserLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
