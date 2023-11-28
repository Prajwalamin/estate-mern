import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="bg-slate-800 shadow-sm">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="fond-bold font-thin text-lg sm:text-xl flex flex-wrap">
            <span className="text-slate-100">Stay</span>
          </h1>
        </Link>
        <form className="bg-slate-100 bg-opacity-10 px-5 py-3 rounded-3xl flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-slate-100 focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-300" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-100 hover:text-slate-400">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-100 hover:text-slate-400">
              About
            </li>
          </Link>

          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              ></img>
            ) : (
              <li className="hidden sm:inline text-slate-100 hover:text-slate-400">
                Sign In
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
