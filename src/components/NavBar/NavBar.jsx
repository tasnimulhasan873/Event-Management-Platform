import React, { use } from 'react';
import { Link, NavLink } from 'react-router'; 
import './NavBar.css';
import { AuthContext } from '../../contexts/AuthC';

const NavBar = () => {
  const { user, signoutUser } = use(AuthContext);

  const handleSignOut = () => {
    signoutUser();
  };

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      {!user && (
        <>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/register">Register</NavLink></li>
        </>
      )}
      {user && (
        <>
        <li><NavLink to="/my-reservations" >My Reservations</NavLink> </li>
          <li><NavLink to="/profile">Profile</NavLink></li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Left side */}
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
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
        <Link className="btn btn-ghost text-xl" to="/">Eventify</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {links}
        </ul>
      </div>

     
      <div className="navbar-end flex items-center gap-4">
        {user ? (
          <>
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold">{user.displayName || 'User'}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-8 h-8 rounded-full border"
              />
            )}
            <button
              onClick={handleSignOut}
              className="btn btn-outline btn-sm btn-error rounded-full px-4"
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-primary btn-sm rounded-full px-4">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
