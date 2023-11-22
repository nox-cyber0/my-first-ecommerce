import React from 'react';
import Layout from '../Components/Layout';

const UndefinedRoute = () => {
  return (
    <>
      <Layout />
      <div className="flex items-center justify-center h-[85vh]">
        <section>
          <h1 className="text-center text-6xl md:text-8xl font-bold text-slate-800 block w-full">Error 404</h1>
          <p className="text-center text-slate-500 text-base md:text-xl font-semibold block w-full">Page not found</p>
        </section>
      </div>
    </>
  );
};

export default UndefinedRoute;