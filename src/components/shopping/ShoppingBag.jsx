import React from "react";

import { FaCheck } from "react-icons/fa";
import { FcAlarmClock } from "react-icons/fc";
import Header from "../Header";
import Perks from "../Perks";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";

const ShoppingBag = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const handleRemoveFromCart = (id, event) => {
    event.preventDefault();
    dispatch(removeFromCart(id));
  };
  const subtotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <>
      <Header />
      <div className="bg-white">
        {!cartItems && <div> Mo Items </div>}
        {cartItems && (
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0">
            <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Shopping Cart
            </h1>

            <form className="mt-12">
              <section aria-labelledby="cart-heading">
                <h2 id="cart-heading" className="sr-only">
                  Items in your shopping cart
                </h2>

                <ul
                  role="list"
                  className="divide-y divide-gray-200 border-b border-t border-gray-200"
                >
                  {cartItems.map((item) => (
                    <li key={cartItems.id} className="flex py-6">
                      <div className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                        <div>
                          <div className="flex justify-between">
                            <h4 className="text-sm">
                              <a className="font-medium text-gray-700 hover:text-gray-800">
                                {item.title}
                              </a>
                            </h4>
                            <p className="ml-4 text-sm font-medium text-gray-900">
                              {item.price}
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 flex flex-1 items-end justify-between">
                          <p className="flex items-center space-x-2 text-sm text-gray-700">
                            {cartItems.id ? (
                              <FaCheck
                                className="h-5 w-5 flex-shrink-0 text-green-500"
                                aria-hidden="true"
                              />
                            ) : (
                              <FcAlarmClock
                                className="h-5 w-5 flex-shrink-0 text-gray-300"
                                aria-hidden="true"
                              />
                            )}

                            <span>
                              {cartItems.id
                                ? "In stock"
                                : `Will ship in 10 days`}
                            </span>
                          </p>
                          <div className="ml-4">
                            <button
                              onClick={(event) =>
                                handleRemoveFromCart(item.id, event)
                              }
                              className="text-sm font-medium text-cyan-600 hover:text-cyan-500"
                            >
                              <span>Remove</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Order summary */}
              <section aria-labelledby="summary-heading" className="mt-10">
                <h2 id="summary-heading" className="sr-only">
                  Order summary
                </h2>

                <div>
                  <dl className="space-y-4">
                    <div className="flex items-center justify-between">
                      <dt className="text-base font-medium text-gray-900">
                        Subtotal
                      </dt>
                      <dd className="ml-4 text-base font-medium text-gray-900">
                        ${subtotal.toFixed(2)}
                      </dd>
                    </div>
                  </dl>
                  <p className="mt-1 text-sm text-gray-500">
                    Shipping and taxes will be calculated at checkout.
                  </p>
                </div>

                <div className="mt-10">
                  <button
                    onClick={() => navigate("/checkout")}
                    className="w-full rounded-md border border-transparent bg-cyan-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                  >
                    Checkout
                  </button>
                </div>

                <div className="mt-6 text-center text-sm">
                  <p>
                    or
                    <span
                      onClick={() => navigate("/home")}
                      className="font-medium text-cyan-600 hover:text-cyan-500"
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </span>
                  </p>
                </div>
              </section>
            </form>
          </div>
        )}
      </div>
      <Perks />
      <Footer />
    </>
  );
};

export default ShoppingBag;
