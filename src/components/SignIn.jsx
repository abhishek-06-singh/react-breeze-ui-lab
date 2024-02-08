// SignIn.js

import React, { useState, useEffect } from "react";
import whiteLogo from "../assets/white.png";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import LogoPage from "./LogoPage";
import { useSelector, useDispatch } from "react-redux";
import {
  setEmail,
  setPassword,
  selectEmail,
  selectPassword,
} from "../store/authSlice";
import { setGoogleAuthData, selectGoogleAuth } from "../store/googleAuthSlice"; // Importing actions and selectors from the new slice
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const googleAuth = useSelector(selectGoogleAuth); // Adding Google Auth state
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showLogo, setShowLogo] = useState(true);

  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  };

  const handlePasswordChange = (event) => {
    dispatch(setPassword(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isEmailPasswordLoginSuccessful = email && password;
    const isGoogleLoginSuccessful =
      googleAuth.email && googleAuth.name && googleAuth.imageUrl;

    if (isEmailPasswordLoginSuccessful || isGoogleLoginSuccessful) {
      console.log("Login successful! Redirecting to home page...");
      navigate("/home");
    } else {
      console.log("Login failed. Please try again.");
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLogo(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showLogo && <LogoPage />}
      {!showLogo && (
        <GoogleOAuthProvider clientId="777852050140-u30fcetaufed00k03pua3n5ot45au2aq.apps.googleusercontent.com">
          <div className="flex min-h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-neutral-100">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <img
                className="mx-auto h-16 w-auto"
                src={whiteLogo}
                alt="Your Company"
              />
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
              <div className="bg-white px-6 py-12 shadow-md sm:rounded-lg sm:px-12">
                <form
                  className="space-y-6"
                  onSubmit={handleSubmit}
                  action="#"
                  method="POST"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={handleEmailChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm  sm:text-sm sm:leading-6 outline-none p-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={handlePasswordChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm  sm:text-sm sm:leading-6 outline-none p-2"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-600"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-3 block text-sm leading-6 text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm leading-6">
                      <a
                        href="#"
                        className="font-semibold text-cyan-600 hover:text-cyan-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                <div>
                  <div className="relative mt-10">
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-sm font-medium leading-6">
                      <span className="bg-white px-6 text-gray-900">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <div className="flex mt-4 items-center justify-center ">
                    <GoogleLogin
                      onSuccess={(credentialResponse) => {
                        const decoded = jwtDecode(
                          credentialResponse.credential
                        );
                        console.log(decoded);
                        // Dispatch action to store Google login data
                        dispatch(
                          setGoogleAuthData({
                            email: decoded.email,
                            name: decoded.name,
                            imageUrl: decoded.picture,
                          })
                        );
                        navigate("/home");
                      }}
                      size="large"
                      onError={() => {
                        console.log("Login Failed");
                      }}
                    />
                  </div>
                </div>
              </div>

              <p className="mt-10 text-center text-sm text-gray-500">
                Made with love by{" "}
                <a
                  href="#"
                  className="font-semibold leading-6 text-cyan-600 hover:text-cyan-500"
                >
                  Abhishek
                </a>
              </p>
            </div>
          </div>
        </GoogleOAuthProvider>
      )}
    </>
  );
};

export default SignIn;
