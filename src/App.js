//React
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import axios from "axios";

//Pages
import { Homepage } from "./components/index";

import Sidebar from "./components/sidebar";
import { setDarkTheme } from "./features/theme/themeSlice";
import LoginScreen from "./screens/auth/loginscreen";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/private-route";

export default function App() {
  useEffect(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      dispatch(setDarkTheme(true));
      localStorage.setItem("color-theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      dispatch(setDarkTheme(false));
      localStorage.setItem("color-theme", "light");
      document.documentElement.classList.remove("dark");
    }
    return () => {};
  }, []);
  const dispatch = useDispatch();
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Sidebar children={<Homepage />} />{" "}
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </Router>
    </>
  );
}
