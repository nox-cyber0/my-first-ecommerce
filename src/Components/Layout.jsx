import React from 'react';
import Navbar from '../Components/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="pt-16 px-8 pb-12 md:px-20 text-slate-800 bg-slate-50 dark:bg-slate-800 dark:text-white min-h-screen">
        {children}
      </div>
    </>
  );
};

export default Layout;