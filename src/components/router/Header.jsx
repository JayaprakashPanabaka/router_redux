import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
          alt="logo"
          className="h-10 mr-2"
        />
        <h2 className="text-[#551e53] font-bold text-2xl font-serif">
          JP Tech
        </h2>
      </div>

      <div className="flex items-center justify-center list-none text-xl font-bold text-[#551e53]">
        <Link to="/">
          <li className="mx-2 cursor-pointer hover:text-[#555555] hover:underline">
            Home
          </li>
        </Link>
        <Link to="/about">
          <li className="mx-2 cursor-pointer hover:text-[#555555] hover:underline">
            About
          </li>
        </Link>
        <Link to="/contact">
          <li className="mx-2 cursor-pointer hover:text-[#555555] hover:underline">
            Contact
          </li>
        </Link>
      </div>
    </div>
  );
};

export default Header;
