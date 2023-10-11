import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import UndefinedRoute from "./Pages/Undefined";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Navbar from "./Modules/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<UndefinedRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
