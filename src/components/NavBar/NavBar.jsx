import React from 'react';
import { Link, NavLink } from 'react-router';
import './NavBar.css';
import { use } from 'react';
import { AuthContext } from '../../contexts/AuthC';



const NavBar = () => {
const {user,signoutUser} = use(AuthContext);
console.log(user);
const handleSignOut = () => {
    signoutUser();
  };

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      {!user && <>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
      </>}
      {user && <>
        <li><NavLink to="/profile">Profile</NavLink></li>
      </>}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl" to="/">Event Explorer</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <span className="mr-2">{user.email}</span>
            <button onClick={handleSignOut} className="btn">Sign Out</button>
          </>
        ) : (
          <Link to="/login" className="btn">Login</Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;