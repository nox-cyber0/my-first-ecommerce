import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-gray-50 h-screen">
        <form className=" border border-slate-400 m-auto py-12 px-8">
          <h1 className="text-5xl text-slate-500 font-semibold text-center">Welcome back</h1>
          <p className="text-md font-medium text-left text-slate-700 mb-6">Sign in to your account to continue</p>
          <div className="mb-4">
            <label className="text-sm font-medium text-slate-400 leading-normal" htmlFor="username">Username</label>
            <input type="text" className="w-full text-md p-1.5 rounded-md border border-slate-400 focus:border-slate-700 outline-none" placeholder="Enter username" />
          </div>
          <div className="mb-4">
            <label className="text-sm font-medium text-slate-400 leading-normal" htmlFor="password">Password</label>
            <input type="password" className="w-full text-md p-1.5 rounded-md border border-slate-400 focus:border-slate-700 outline-none" placeholder="Enter password" />
          </div>
          <button className="block w-full p-2 bg-transparent border border-slate-400 text-slate-400 rounded-lg hover:bg-slate-400 hover:text-white transition-all mb-6" type="submit">Log In</button>
          <div className="text-slate-400 font-medium text-md">
            Not registered yet? <Link to="/register">Create an account</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;