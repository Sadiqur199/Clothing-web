'use client'
import React, { Fragment } from 'react';

const isAdminView = false;
const isAuthUser = false;
const user = {
  role : 'sds'
}

const Navbar = () => {
  return <>
    <nav className = "bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <div className='flex items-center cursor-pointer'>
          <span className='self-center text-2xl font-semibold whitespace-nowrap'>
            Ecommercery
          </span>
        </div>
          <div className='flex md:order-2 gap-2'>
              {
                !isAdminView && isAuthUser ?(
                <Fragment>
                <button>Account</button>
                <button>Cart</button>
              </Fragment> ): null
              }
              {
                user?.role === 'admin' ?
                isAdminView ? <button>Client View</button> : <button>Admin View</button>
                :null
              }
              {
                isAuthUser ? <button>Logout</button> : <button>Login</button>
              }
          </div>
      </div>
    </nav>
  </>;
};

export default Navbar;