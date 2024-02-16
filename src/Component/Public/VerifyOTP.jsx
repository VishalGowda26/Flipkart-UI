import React, { useState } from "react";
import login from "../Images/login.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VerifyOTP = () => {
  const [OTP, setotp] = useState();
  const nav = useNavigate();

  const handleOTP = async (event) => {
    // event.preventDefault();
    //fire request to server
    //using axios
    const URL = "http://localhost:8080/api/v1/verify-otp";

    const body = {
      email: sessionStorage.getItem("email"),
      otp: OTP,
    };

    const header = {
        "Content-Type": "application/json",
    };
    console.log(sessionStorage.getItem("email"))

    try {
      const otpResponse = await axios.post(URL,body,header)
      console.log(otpResponse);
      if (otpResponse.status === 201) {
        navigate("/home");
      } else {
        nav("/search");
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <div className=" flex h-svh w-svw justify-center items-center ">
      <section className="bg-blue-600 h-4/6 w-64 p-8 flex flex-col items-center gap-32">
        <aside>
          <div className="text-white text-2xl font-semibold wrap  ">Login</div>
          <div className="text-white font-normal text-lg wrap pt-5 font-sans ">
            Get access to you Orders, Wishlist and Recommendations
          </div>
        </aside>
        <aside className="">
          <img src={login} alt="" className=" h-44 w-80 " />
        </aside>
      </section>

      <section className="bg-white border-2 flex justify-start h-4/6 w-3/12 gap-4 items-center flex-col  p-7 ">
        <div
          action=""
          className="flex items-start h-12 gap-5 w-full m-8 border-4"
        >
          <input
            type="text"
            className="h-full w-full"
            onChange={(e) => {setotp(e.target.value)}}
          />
        </div>
        <div className="w-full text-sm m-4">
          By continuing, you agree to Flipkart's{" "}
          <span className=" text-blue-700">Terms of Use</span> and{" "}
          <span className=" text-blue-700">Privacy Policy</span>
        </div>
        <div action="" className="flex items-start flex-col  w-full">
          <button
            type="text"
            className=" text-white  h-10 border-2 w-full bg-orange-600"
            onClick={handleOTP}
          >
            Verify OTP
          </button>
        </div>
      </section>
    </div>
  );
};

export default VerifyOTP;
