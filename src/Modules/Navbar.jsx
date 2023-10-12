import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-slate-700 px-12 w-full shadow-md text-lg py-4">
          <Link className="font-medium color text-white mr-4" to="/">Home</Link>
          <Link className="font-medium color text-white mx-4" to="/products">Products</Link>
          <Link className="font-medium color text-white mx-4" to="/about">About Us</Link>
          <Link className="float-right" to="/login" target="_blank">
            <button className="font-medium color text-slate-700 bg-slate-50 py-1.5 px-2.5 rounded shadow shadow-slate-800 hover:bg-slate-200 text-sm uppercase">Sign In</button>
          </Link>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;