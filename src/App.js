import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Login from "./Pages/Login";
import UndefinedRoute from "./Pages/Undefined";
// import RequireAuth from "./Utils/RequireAuth";
import Signup from "./Pages/Signup";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/*" element={<UndefinedRoute />} />
      </Routes>
    </div>
  );
};

export default App;
