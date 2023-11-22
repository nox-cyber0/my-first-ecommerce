import React from 'react';
import Navbar from '../Components/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="pt-16 px-8 md:px-20">
        {children}
      </div>
    </>
  );
};

export default Layout;