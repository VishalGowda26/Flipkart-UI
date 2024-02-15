import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/flipkart logo.png";

const Header = () => {
  return (
    <header className="h-20  flex justify-center ">
      <nav className="bg-white-100 flex justify-stretch items-center h-full w-full p-10">
        <Link>
          <img src={logo} alt="" className="h-10 w-40 " />
        </Link>

        {/*-------------------------------------------> Search Bar <---------------------------------------------------------*/}
        <div className="w-1/2 flex justify-center items-center bg-blue-50 rounded-md pl-2">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Seach for products, brands and more...,"
            className="h-12 w-96  bg-blue-50 rounded-md pl-4  text-lg focus:ring-blue-50 focus:outline-none"
          />
        </div>

        {/*----------------------------------------------------> Link Block <-----------------------------------------------*/}
        <div className="w-96 flex justify-evenly items-center ">
          {/*---------------> Login <----------------*/}
          <div>
            <Link
              to={"/login"}
              className="bg-blue-50 hover:bg-slate-300 active:bg-violet-700 focus:outline-none focus:ring focus:ring-blue-50 p-3 rounded-md "
            >
              Login
            </Link>
          </div>

          {/* -----------> Become a Seller Option <--------*/}
          <Link
            to={"/"}
            className="hover:bg-blue-50 active:bg-violet-700 focus:outline-none focus:ring focus:ring-blue-50 p-3 rounded-md"
          >
            Become a Seller
          </Link>

          {/*--------------> Cart <------------ */}
          <Link
            to={"/cart"}
            className="hover:bg-blue-50 active:bg-violet-700 focus:ring focus:ring-blue-50 p-3 rounded-md hover:outline-offset-2 "
          >
            Cart
          </Link>
          {/*--------------> Register <------------ */}
          <Link
            to={"/seller/register"}
            className="hover:bg-blue-50 active:bg-violet-700 focus:ring focus:ring-blue-50 p-3 rounded-md hover:outline-offset-2 "
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
