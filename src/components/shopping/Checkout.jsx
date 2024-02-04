import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { FaChevronCircleUp } from "react-icons/fa";
import Address from "./Address";
import Header from "../Header";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { removeFromCart, clearCart } from "../../store/cartSlice";
import { calculateOrderSummary } from "../../store/orderSummarySlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const [formData, setFormData] = useState({
    email: "",
    nameOnCard: "",
    cardNumber: "",
    expirationDate: "",
    cvc: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const [validationErrors, setValidationErrors] = useState({
    email: "",
    nameOnCard: "",
    cardNumber: "",
    expirationDate: "",
    cvc: "",
  });

  const subtotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  const shippingCharge = 15.0;
  const taxCharge = 25.0;

  useEffect(() => {
    const isValid =
      formData.email !== "" &&
      formData.nameOnCard !== "" &&
      formData.cardNumber !== "" &&
      formData.expirationDate !== "" &&
      formData.cvc !== "";

    setIsFormValid(isValid);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setValidationErrors({
      ...validationErrors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid =
      formData.email !== "" &&
      formData.nameOnCard !== "" &&
      formData.cardNumber !== "" &&
      formData.expirationDate !== "" &&
      formData.cvc !== "";

    setIsFormValid(isValid);

    if (isValid) {
      dispatch(calculateOrderSummary({ cartItems: cartItems }));

      dispatch(clearCart());

      toast.success("Order placed successfully!");

      setTimeout(() => {
        navigate("/order-summary");
      }, 2000);
    } else {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        email: formData.email === "" ? "Email is required." : "",
        nameOnCard:
          formData.nameOnCard === "" ? "Name on card is required." : "",
        cardNumber:
          formData.cardNumber === "" ? "Card number is required." : "",
        expirationDate:
          formData.expirationDate === "" ? "Expiration date is required." : "",
        cvc: formData.cvc === "" ? "CVC is required." : "",
      }));

      toast.error("Please fill in all the required fields.");
    }
  };
  return (
    <div className="bg-white">
      <div
        className="fixed left-0 top-0 hidden h-full w-1/2 bg-white lg:block"
        aria-hidden="true"
      />
      <div
        className="fixed right-0 top-0 hidden h-full w-1/2 bg-gradient-to-r from-fuchsia-50 to-cyan-50 lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 xl:gap-x-48">
        <h1 className="sr-only">Order information</h1>

        <section
          aria-labelledby="summary-heading"
          className="bg-gradient-to-r from-fuchsia-50 to-cyan-50 px-4 pb-10 pt-16 sm:px-6 lg:col-start-2 lg:row-start-1 lg:bg-transparent lg:px-0 lg:pb-16"
        >
          <div className="mx-auto max-w-lg">
            <h2
              id="summary-heading"
              className="text-lg font-medium text-gray-900"
            >
              Order summary
            </h2>

            <ul
              role="list"
              className="divide-y divide-gray-200 text-sm font-medium text-gray-900"
            >
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-start space-x-4 py-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-20 w-20 flex-none rounded-md object-cover object-center"
                  />
                  <div className="flex-auto space-y-1">
                    <h3>{item.title}</h3>
                  </div>
                  <p className="flex-none text-base font-medium">
                    {item.price}
                  </p>
                </li>
              ))}
            </ul>

            <dl className="hidden space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-900 lg:block">
              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Subtotal</dt>
                <dd>${subtotal.toFixed(2)}</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Shipping</dt>
                <dd>${shippingCharge}</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Taxes</dt>
                <dd>${taxCharge}</dd>
              </div>

              <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                <dt className="text-base">Total</dt>
                <dd className="text-base">
                  ${(subtotal + taxCharge + shippingCharge).toFixed(2)}
                </dd>
              </div>
            </dl>

            <Popover className="fixed inset-x-0 bottom-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden">
              <div className="relative z-10 border-t border-gray-200 bg-white px-4 sm:px-6">
                <div className="mx-auto max-w-lg">
                  <Popover.Button className="flex w-full items-center py-6 font-medium">
                    <span className="mr-auto text-base">Total</span>
                    <span className="mr-2 text-base">
                      ${(subtotal + taxCharge + shippingCharge).toFixed(2)}
                    </span>
                    <FaChevronCircleUp
                      className="h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>
              </div>

              <Transition.Root as={Fragment}>
                <div>
                  <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Popover.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="translate-y-full"
                    enterTo="translate-y-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-y-0"
                    leaveTo="translate-y-full"
                  >
                    <Popover.Panel className="relative bg-white px-4 py-6 sm:px-6">
                      <dl className="mx-auto max-w-lg space-y-6">
                        <div className="flex items-center justify-between">
                          <dt className="text-gray-600">Subtotal</dt>
                          <dd>${subtotal.toFixed(2)}</dd>
                        </div>

                        <div className="flex items-center justify-between">
                          <dt className="text-gray-600">Shipping</dt>
                          <dd>${shippingCharge}</dd>
                        </div>

                        <div className="flex items-center justify-between">
                          <dt className="text-gray-600">Taxes</dt>
                          <dd>${taxCharge}</dd>
                        </div>
                      </dl>
                    </Popover.Panel>
                  </Transition.Child>
                </div>
              </Transition.Root>
            </Popover>
          </div>
        </section>

        <form
          className="px-4 pb-16 pt-16 sm:px-6 lg:col-start-1 lg:row-start-1 lg:px-0 lg:pb-16"
          onSubmit={handleSubmit}
        >
          <div className="mx-auto max-w-lg lg:max-w-none">
            <section aria-labelledby="contact-info-heading">
              <h2
                id="contact-info-heading"
                className="text-lg font-medium text-gray-900"
              >
                Contact information
              </h2>

              <div className="mt-6">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email-address"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm px-3 py-2 bg-gray-50 ${
                      validationErrors.email ? "border-red-500" : ""
                    }`}
                  />
                  {validationErrors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {validationErrors.email}
                    </p>
                  )}
                </div>
              </div>
            </section>

            <section aria-labelledby="payment-heading" className="mt-10">
              <h2
                id="payment-heading"
                className="text-lg font-medium text-gray-900"
              >
                Payment details
              </h2>

              <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4">
                <div className="col-span-3 sm:col-span-4">
                  <label
                    htmlFor="name-on-card"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name on card
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="name-on-card"
                      name="nameOnCard"
                      autoComplete="cc-name"
                      value={formData.nameOnCard}
                      onChange={handleInputChange}
                      className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm px-3 py-2 bg-gray-50 ${
                        validationErrors.nameOnCard ? "border-red-500" : ""
                      }`}
                    />
                    {validationErrors.nameOnCard && (
                      <p className="mt-1 text-sm text-red-500">
                        {validationErrors.nameOnCard}
                      </p>
                    )}
                  </div>
                </div>

                <div className="col-span-3 sm:col-span-4">
                  <label
                    htmlFor="card-number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Card number
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="card-number"
                      name="cardNumber"
                      autoComplete="cc-number"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm px-3 py-2 bg-gray-50 ${
                        validationErrors.cardNumber ? "border-red-500" : ""
                      }`}
                    />
                    {validationErrors.cardNumber && (
                      <p className="mt-1 text-sm text-red-500">
                        {validationErrors.cardNumber}
                      </p>
                    )}
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-3">
                  <label
                    htmlFor="expiration-date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Expiration date (MM/YY)
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="expirationDate"
                      id="expiration-date"
                      autoComplete="cc-exp"
                      value={formData.expirationDate}
                      onChange={handleInputChange}
                      className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm px-3 py-2 bg-gray-50 ${
                        validationErrors.expirationDate ? "border-red-500" : ""
                      }`}
                    />
                    {validationErrors.expirationDate && (
                      <p className="mt-1 text-sm text-red-500">
                        {validationErrors.expirationDate}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="cvc"
                    className="block text-sm font-medium text-gray-700"
                  >
                    CVC
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="cvc"
                      id="cvc"
                      autoComplete="csc"
                      value={formData.cvc}
                      onChange={handleInputChange}
                      className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm px-3 py-2 bg-gray-50 ${
                        validationErrors.cvc ? "border-red-500" : ""
                      }`}
                    />
                    {validationErrors.cvc && (
                      <p className="mt-1 text-sm text-red-500">
                        {validationErrors.cvc}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </section>
            <Address />
            <div className="mt-10 border-t border-gray-200 pt-6 sm:flex sm:items-center sm:justify-between">
              <button
                type="submit"
                className="w-full rounded-md bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:order-last sm:ml-6 sm:w-auto"
              >
                Continue
              </button>
              <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
                You won't be charged until the next step.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
