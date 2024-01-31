import React, { useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { PiEyeClosedDuotone } from "react-icons/pi";
import LogoWithName from "../assets/logo-with-name.png";
import { FaGoogle, FaFacebook, FaGithub, FaDribbble } from "react-icons/fa";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

import { jwtDecode } from "jwt-decode";
import LogoPage from "../components/LogoPage";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [googleUserData, setGoogleUserData] = useState({
    name: "",
    picture: "",
    email: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleGoogleLogin = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    const { name, picture, email } = decoded;

    setGoogleUserData({
      name,
      picture,
      email,
    });

    localStorage.setItem("GoogleLoginName", name);
    localStorage.setItem("GoogleLoginPicture", picture);
    localStorage.setItem("GoogleLoginEmail", email);
  };
  const handleGoogleLoginError = () => {
    console.log("Login Failed");
  };

  return (
    <>
      <LogoPage />
      <GoogleOAuthProvider clientId="">
        <div className="flex flex-col p-10 bg-gray-900 h-screen text-white">
          <div className="mt-1 justify-start">
            <img
              className="cursor-pointer w-64 hover:opacity-75 hover:scale-105 transition-transform duration-500 ease-in-out"
              src={LogoWithName}
              alt="logo"
            />
          </div>
          <div className="flex flex-col items-center justify-center  sm:mt-10">
            <form className="w-full max-w-[400px] bg-gray-700 p-10 rounded-md mx-auto h-[450px]">
              <div className="text-md mb-4">
                <h2 className="text-3xl font-bold">Log In</h2>
                New to ReactBreeze?{" "}
                <span className="text-sky-500 "> Create an account</span>
              </div>

              <div className="flex items-center lg:space-x-5 md:space-x-3 sm:space-x-1 mb-4 justify-center">
                <GoogleLogin
                  theme="filled_blue"
                  size="latge"
                  shape="pill"
                  width="300px"
                  onSuccess={handleGoogleLogin}
                  onError={handleGoogleLoginError}
                  useOneTap
                />
              </div>

              <div className="mb-4 text-lg text-center">or</div>

              <div className="mb-4">
                <input
                  type="email"
                  id="username"
                  placeholder="Enter your email"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:border-rose-500 text-black outline-none py-3"
                />
              </div>

              <div className="mb-4 relative">
                <div className="flex items-center relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:border-rose-500 text-black outline-none py-3"
                  />
                  <div
                    className="absolute top-2 right-2 cursor-pointer "
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? (
                      <RiEyeLine className="text-black text-2xl" />
                    ) : (
                      <PiEyeClosedDuotone className="text-black text-2xl" />
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="bg-rose-500 text-white py-4 px-4 rounded-lg hover:bg-rose-600 transition-colors duration-300 w-full mt-3"
              >
                Log In
              </button>
            </form>
          </div>
          <div className="mt-auto justify-start text-start text-sm">
            <p>
              Copyright © 2024 ReactBreeze by Abhishek Singh Chauhan. All rights
              reserved.
            </p>
          </div>
        </div>
      </GoogleOAuthProvider>
    </>
  );
};

export default Login;
