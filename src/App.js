import "./App.css";
import React from "react";
import Signup from "./components/auth/Signup/Signup";
import Login from "./components/auth/Login/Login";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";
import Home from "./components/home/Home";
import { useAuth } from "./contexts/AuthContext";
import ProtectedRoute from "./components/auth/PrivateRoute";
// import Watchlist from "./components/watchlist/Watchlist";

const App = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route
            path="home"
            element={
              <ProtectedRoute user={user}>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
