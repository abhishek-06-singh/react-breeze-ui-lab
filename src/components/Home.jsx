import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { IoMdArchive } from "react-icons/io";
import blackimage from "../assets/white.png";
import Collection from "./Collection ";
import {
  setEmail,
  setPassword,
  selectEmail,
  selectPassword,
} from "../store/authSlice";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Perks from "./Perks";
import Trending from "./Trending";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Testemonials from "./smallComponents/Testemonials";

const Home = () => {
  const email = useSelector(selectEmail);

  const navigate = useNavigate();
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="relative">
          <div className="absolute inset-0  sm:flex sm:flex-col lg:flex">
            <div className="relative w-full flex-1 bg-gray-800">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-pink-950 opacity-30" />
            </div>
            <div className="h-32 w-full bg-white md:h-40 lg:h-48" />
          </div>

          <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
            <div
              aria-hidden="true"
              className="absolute inset-0 flex flex-col sm:hidden"
            >
              <div className="relative w-full flex-1 bg-gray-800">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gray-900 opacity-50" />
              </div>
              <div className="h-48 w-full bg-white" />
            </div>
            <div className="relative py-32">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Mid-Season Sale
              </h1>
              <div className="mt-4 sm:mt-6">
                <span
                  onClick={() => navigate("/products")}
                  className="inline-block rounded-md border border-transparent bg-cyan-600 px-8 py-3 font-medium text-white hover:bg-cyan-700 cursor-pointer"
                >
                  Shop Collection
                </span>
              </div>
            </div>
          </div>

          <Collection />
        </div>

        <Trending />
        <Testemonials />
        <Perks />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
