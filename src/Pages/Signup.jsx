import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../Utils/AuthContext";
// import useAuth from "../Utils/useAuth";

const Signup = () => {
  return (
    <>
      <div className="flex flex-wrap h-screen">
        <div className="flex justify-center items-center h-full bg-gray-50 w-full xl:w-1/3 md:w-1/2">
          <form className="w-3/4 mx-auto">
            <h1 className="text-2xl font-semibold mb-6">Create your account</h1>
            <div className="mb-4">
              <label htmlFor="username" className="block text-left text-sm font-medium mb-2 text-slate-500">Username</label>
              <input type="text" className="block w-full text-base p-2 rounded-md bg-transparent border border-slate-500 focus:bg-slate-50 focus:outline-slate-800" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-left text-sm font-medium mb-2 text-slate-500">Email</label>
              <input type="email" className="block w-full text-base p-2 rounded-md bg-transparent border border-slate-500 focus:bg-slate-50 focus:outline-slate-800" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-left text-sm font-medium mb-2 text-slate-500">Password</label>
              <input type="password" className="block w-full text-base p-2 rounded-md bg-transparent border border-slate-500 focus:bg-slate-50 focus:outline-slate-800" />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmpassword" className="block text-left text-sm font-medium mb-2 text-slate-500">Confirm Password</label>
              <input type="password" className="block w-full text-base p-2 rounded-md bg-transparent border border-slate-500 focus:bg-slate-50 focus:outline-slate-800" />
            </div>
            <button className="block w-full text-center text-sm font-medium border border-slate-800 p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition-all">Sign Up</button>
            <p className="text-slate-500 font-medium text-sm mt-4">Already have an account? <Link className="text-blue-700 transition-all hover:underline" to="/sign-in">Sign In</Link></p>
          </form>
        </div>
        <div className="hidden md:flex xl:w-2/3 md:w-1/2 bg-blue-700 h-full justify-center items-center text-5xl font-bold text-center text-white">
          Image Here
        </div>
      </div>
    </>
  )
}

export default Signup;