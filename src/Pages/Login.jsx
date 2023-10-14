import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Utils/Auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState(
    {
      username: "",
      password: ""
    }
  );

  const auth = useAuth();
  const navigate = useNavigate();

  const loginHandler = () => {
    auth.login(user)
    navigate('/')
  }
  return (
    <>
      <div className="flex justify-center items-center bg-slate-50 h-screen dark:bg-slate-800">
        <form onSubmit={loginHandler} className=" border border-slate-400 m-auto py-12 px-10 rounded-xl bg-slate-100 dark:bg-slate-900 shadow-md">
          <h1 className="text-5xl text-slate-500 font-semibold text-center dark:text-slate-50">Welcome back</h1>
          <p className="text-md font-medium text-left text-slate-400 dark:text-slate-50 mb-6">Sign in to your account to continue</p>
          <div className="mb-4">
            <label className="text-sm font-medium text-slate-400 dark:text-slate-100 leading-normal" htmlFor="username">Username</label>
            <input type="text" name="username" onChange={(e) =>
              setUser({...user, username: e.target.value,
                }
                )} className="w-full text-md p-1.5 rounded-md border border-slate-400 focus:border-slate-700 outline-none dark:focus:border-slate-100" placeholder="Enter username" />
          </div>
          <div className="mb-4">
            <label className="text-sm font-medium text-slate-400 leading-normal dark:text-slate-100" htmlFor="password">Password</label>
            <input type="password" onChange={(e) =>
            setUser({
              password: e.target.value
            }
            )} className="w-full text-md p-1.5 rounded-md border border-slate-400 focus:border-slate-700 outline-none dark:focus:border-slate-100" placeholder="Enter password" />
          </div>
          <button className="block w-full p-2 bg-transparent border border-slate-400 text-slate-400 rounded-lg hover:bg-slate-400 hover:text-white transition-all mb-6 dark:border-slate-100 dark:text-slate-100 dark:hover:bg-slate-50 dark:hover:text-slate-800" type="submit">Log In</button>
          <div className="text-slate-400 dark:text-slate-100 font-medium text-md">
            Not registered yet? <Link className="text-slate-700 dark:text-slate-50" to="/register">Create an account</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;