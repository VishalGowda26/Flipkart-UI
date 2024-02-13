import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/Flipkart-logo.png";


const Header = () => {
  return (
    <header className="h-20  flex justify-center ">
      <nav className="bg-slate-300 flex justify-between items-center h-full w-full p-10">
        <Link>
          <img src={logo} alt="" className="h-16 w-36 " />
        </Link>

        {/* Search Bar */}
        <div className="w-1/3 flex justify-center items-center bg-blue-50 rounded-md pl-2">
        <i class="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Seach for products, brands and more...,"
            className="h-12 w-96  bg-blue-50 rounded-md pl-4  text-lg"
          />
        </div>

        {/* Link Block */}
        <div className="w-96 flex justify-evenly items-center ">
          {/* Login */}
          <Link to={"/"}>
            Login
          </Link>

          {/* Become a Seller Option */}
          <Link to={"/"}>
          Become a Seller
          </Link>

          {/* Cart */}
          <Link to={"/"}>
          Cart
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
