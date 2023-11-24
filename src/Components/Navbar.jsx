import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState('hidden');
  const [menuIcon, setMenuIcon] = useState('Menu');
  useEffect(() => {
    if (displayMenu === 'hidden') {
      setMenuIcon('Menu')
    } else {
      setMenuIcon('Close')
    }
  }, [displayMenu])

  return (
    <header className='fixed w-full bg-gray-50 dark:bg-slate-800'>
      <nav className="w-full md:flex md:justify-between md:items-center px-12 md:px-20 py-3.5 mx-auto">
        <Link className="text-lg font-bold font-mono text-blue-700 uppercase inline dark:text-white" to='/'>Logo</Link>
        <span
          className='md:hidden block float-right font-mono cursor-pointer text-slate-800 dark:text-gray-50'
          onClick={() => {
            displayMenu === 'hidden' ? setDisplayMenu('block') : setDisplayMenu('hidden')
          }}
        >{menuIcon}</span>
        <div className={`${displayMenu} md:flex md:justify-between w-3/4 max-sm:w-full text-right`}>
          <ul className="text-slate-700 dark:text-gray-50 font-medium md:flex">
            <li className="md:mx-6 py-2.5 md:py-0"><NavLink to='/'>Home</NavLink></li>
            <li className="md:mx-6 pb-2.5 md:py-0"><NavLink to='/products'>Products</NavLink></li>
            <li className="md:mx-6 pb-2.5 md:py-0"><NavLink to='/about'>About Us</NavLink></li>
          </ul>
          <span className="text-slate-700 dark:text-gray-50 font-medium md:mx-6 md:py-0 border font-sans text-sm border-slate-700 hover:bg-gray-200 dark:border-gray-50 dark:hover:bg-slate-700 px-2.5 py-0.5 rounded-md"><NavLink to='/sign-up'>Sign Up</NavLink></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;