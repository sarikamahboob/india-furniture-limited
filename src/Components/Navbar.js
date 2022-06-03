import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div className="">
      <div class="navbar  max-w-7xl mx-auto">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabIndex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52 font-roboto  "
            >
              <li className="">
                <NavLink
                  className="font-bold text-orange-500 bg-white border hover:border-orange-500  text-lg"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="">
                <NavLink className="font-bold " to="/form">
                  Customer Inquiry Form
                </NavLink>
              </li>
              <li>
                {user ? (
                  <button onClick={logout} className="btn btn-accent">
                    Sign Out
                  </button>
                ) : (
                  <Link to="/signin" className="font-bold">
                    Sign In
                  </Link>
                )}
              </li>
            </ul>
          </div>
          <Link
            to="/"
            class=" text-orange-600 btn btn-ghost normal-case text-3xl font-bold font-saira"
          >
            India Furniture Limited
          </Link>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0 font-roboto">
            <li>
              <NavLink
                className="font-bold text-orange-500 bg-white border hover:border-orange-500  text-lg"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="font-bold text-orange-500 bg-white border hover:border-orange-500  text-lg ml-2"
                to="/form"
              >
                Customer Inquiry Form
              </NavLink>
            </li>

            <li className="hover:bg-none">
              {user ? (
                <div>
                  <p className=" text-orange-500 font-bold  ml-2 text-lg">
                    {user.displayName}
                  </p>
                  <button
                    onClick={logout}
                    className="btn bg-orange-500 border border-orange-500 text-orange font-bold  ml-2 text-lg"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <NavLink
                  className="text-white font-bold  ml-2 bg-orange-500 hover:text-orange-500  border border-orange-500 hover:bg-transparent hover:border-orange-500 text-lg"
                  to="/signin"
                >
                  Sign In
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
