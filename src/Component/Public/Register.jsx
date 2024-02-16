import React, { useState } from "react";
import login from "../Images/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import axios from "axios";

const Register = ({ role }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegistration = async (event) => {
    // event.preventDefault();
    //fire request to server
    //using axios
    const URL = "http://localhost:8080/api/v1/users";
    const body = {
      email: username,
      password: password,
      userRole: role,
    };
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(body.email);
    console.log(body.password);
    console.log(body.userrole);
    try {
      const response = await axios.post(URL, body, header);
      console.log(response);
      if (response.status === 202) {
        navigate("/verify-otp");
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex h-svh w-svw justify-center items-center ">
      <section className="bg-blue-600 h-4/6 w-80 p-8 flex flex-col items-center gap-32">
        <aside>
          <div className="text-white text-2xl font-semibold wrap  ">
            Looks like you are new here!
          </div>
          <div className="text-white font-normal text-lg wrap pt-5 font-sans ">
            Signup with your email id to get started
          </div>
        </aside>
        <aside className="">
          <img src={login} alt="" className=" h-44 w-80 " />
        </aside>
      </section>

      <section className="bg-white border-2 flex justify-start h-4/6 w-4/12  items-center flex-col  p-7 ">
        <div action="" className="flex items-start flex-col w-full m-8 gap-8 ">
          <input
            type="text"
            className=" w-full h-12 border-b-2  border-zinc-500 text-lg focus:outline-none"
            placeholder="Enter Your Email id"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            type="password"
            className=" w-full h-12 border-b-2  border-zinc-500 text-lg focus:outline-none"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="w-full text-sm m-4">
          By continuing, you agree to Flipkart's
          <span className=" text-blue-700">Terms of Use</span> and
          <span className=" text-blue-700">Privacy Policy</span>
        </div>
        <div action="" className="flex items-start flex-col  w-full">
          <button
            type="text"
            onChange={(event) => setUsername(event.target.value)}
            className=" text-white  h-10 border-2 w-full bg-orange-600"
            onClick={handleRegistration}
          >
            CONTINUE
          </button>

          <div className="pt-4 w-full">
            <Link to="/login">
              <button
                type="text"
                onChange={(event) => setUsername(event.target.value)}
                className=" text-blue-700  h-10 border-2 w-full text-sm font-medium"
              >
                Existing User?Log in
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
