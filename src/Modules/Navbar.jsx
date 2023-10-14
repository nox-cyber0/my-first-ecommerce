import { NavLink, Link, Outlet } from "react-router-dom";
import { useAuth } from "../Utils/Auth";

const Navbar = () => {
  const auth = useAuth();

  return (
    <div className="bg-slate-700 px-12 w-full shadow-md shadow-slate-400">
      <nav className="text-lg py-4 w-2/3 ml-auto text-white">
          <NavLink className="mr-4" to="/">Home</NavLink>
          <NavLink className="mx-4" to="/products">Products</NavLink>
          <NavLink className="mx-4" to="/about">About Us</NavLink>
          {
            !auth.user && (
              <Link className="float-right" to="/login" target="_blank">
                <button className="font-medium color text-slate-700 bg-slate-50 py-1.5 px-2.5 rounded hover:bg-slate-200 text-sm uppercase dark:border dark:border-slate-50 dark:bg-transparent dark:text-slate-50 dark:hover:text-slate-700 dark:hover:bg-slate-50">Sign In</button>
              </Link>
            )
          }
      </nav>

      <Outlet />
    </div>
  );
}

export default Navbar;