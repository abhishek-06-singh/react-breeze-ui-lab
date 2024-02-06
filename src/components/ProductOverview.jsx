import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Offers from "./smallComponents/Offers";
import Perks from "./Perks";
import Footer from "./Footer";
import { FaCheck, FaQuestionCircle, FaStar } from "react-icons/fa";
import { RadioGroup } from "@headlessui/react";
import { IoShieldCheckmark } from "react-icons/io5";
import ShimmerLoaderSingle from "./shimmerUi/ShimmerLoaderSingle";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductOverview = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);
  const handleAddToCart = (event) => {
    toast.success("Item added to cart");
    event.preventDefault(); // Prevents the default form submission behavior
    dispatch(addToCart(product));
  };

  return (
    <div>
      <Header />
      {loading && <ShimmerLoaderSingle />}
      {product && (
        <>
          <div className="bg-">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              {/* Product details */}
              <div className="lg:max-w-lg lg:self-end">
                <div className="mt-4">
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {product.title}
                  </h1>
                </div>

                <section aria-labelledby="information-heading" className="mt-4">
                  <h2 id="information-heading" className="sr-only">
                    Product information
                  </h2>

                  <div className="flex items-center">
                    <p className="text-lg text-gray-900 sm:text-xl">
                      ${product.price}
                    </p>

                    <div className="ml-4 border-l border-gray-300 pl-4">
                      <h2 className="sr-only">Reviews</h2>
                      <div className="flex items-center">
                        <div>
                          <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <FaStar
                                key={rating}
                                className={`${
                                  rating < Math.floor(product.rating.rate)
                                    ? "text-yellow-500"
                                    : "text-gray-300"
                                } h-5 w-5 flex-shrink-0`}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <p className="sr-only">
                            {product.rating.rate} out of 5 stars
                          </p>
                        </div>
                        <p className="ml-2 text-sm text-gray-500">
                          {product.rating.count} reviews
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-6">
                    <p className="text-base text-gray-500">
                      {product.description}
                    </p>
                  </div>
                </section>
              </div>

              {/* Product image */}
              <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                <div className=" w-96 h-2/4 p-2 overflow-hidden rounded-lg ml-auto">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Product form */}
              <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
                <section aria-labelledby="options-heading">
                  <h2 id="options-heading" className="sr-only">
                    Product options
                  </h2>

                  <form>
                    <div className="mt-10">
                      <button
                        onClick={handleAddToCart}
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 px-8 py-3 text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                      >
                        Add to bag
                      </button>
                    </div>
                    <div className="mt-6 text-center">
                      <a
                        href="#"
                        className="group inline-flex text-base font-medium"
                      >
                        <IoShieldCheckmark
                          className="mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        <span className="text-gray-500 hover:text-gray-700">
                          Lifetime Guarantee
                        </span>
                      </a>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </div>
          <Offers />
          <Perks />

          <Footer />
        </>
      )}
    </div>
  );
};

export default ProductOverview;
