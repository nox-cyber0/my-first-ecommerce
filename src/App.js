import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Utils/Auth";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import UndefinedRoute from "./Pages/Undefined";
import Products from "./Pages/Products";
import About from "./Pages/About";
// import Layout from "./Components/Layout";

import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route index element={<Home />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="/*" element={<UndefinedRoute />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
