import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { FaCcVisa } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const OrderSummary = () => {
  const navigate = useNavigate();
  const orderSummary = useSelector((state) => state.orderSummary);
  const subtotal = orderSummary.orderItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  const shippingCharge = 15.0;
  const taxCharge = 25.0;
  const address = useSelector((state) => state.address);
  const getRandomStatus = () => {
    const statuses = ["Order placed", "Processing", "Shipped", "Delivered"];
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
  };
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl pt-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="space-y-2 px-4 sm:flex sm:items-baseline sm:justify-between sm:space-y-0 sm:px-0">
          <div className="flex sm:items-baseline sm:space-x-4">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Order #54879
            </h1>
          </div>
          <span
            onClick={() => navigate("/home")}
            className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:block"
          >
            Home page
            <span aria-hidden="true"> &rarr;</span>
          </span>
          <p className="text-sm text-gray-600">
            Order placed{" "}
            <time dateTime="2021-03-22" className="font-medium text-gray-900">
              {formatDate(new Date())}
            </time>
          </p>
        </div>

        {/* Products */}
        <div className="mt-6">
          <h2 className="sr-only">Products purchased</h2>

          <div className="space-y-8">
            {orderSummary.orderItems.map((item) => (
              <div
                key={item.id}
                className="border-b border-t border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border"
              >
                <div className="px-4 py-6 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                  <div className="sm:flex lg:col-span-7">
                    <div className="aspect-h-1 aspect-w-1 w-full flex-shrink-0 overflow-hidden rounded-lg sm:aspect-none sm:h-40 sm:w-40">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                      />
                    </div>

                    <div className="mt-6 sm:ml-6 sm:mt-0">
                      <h3 className="text-base font-medium text-gray-900">
                        <a>{item.title}</a>
                      </h3>
                      <p className="mt-2 text-sm font-medium text-gray-900">
                        $ {item.price}
                      </p>
                      <p className="mt-3 text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 lg:col-span-5 lg:mt-0">
                    <dl className="grid grid-cols-2 gap-x-6 text-sm">
                      <div>
                        <dt className="font-medium text-gray-900">
                          Delivery address
                        </dt>
                        <dd className="mt-3 text-gray-500">
                          <span className="block">
                            {address.shippingAddress.address}
                          </span>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-900">Apartment</dt>
                        <dd className="mt-3 space-y-3 text-gray-500">
                          <p> {address.shippingAddress.apartment}</p>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Billing */}
        <div className="mt-16">
          <h2 className="sr-only">Billing Summary</h2>

          <div className="bg-gray-100 px-4 py-6 sm:rounded-lg sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-8">
            <dl className="grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-7">
              <div>
                <dt className="font-medium text-gray-900">Billing address</dt>
                <dd className="mt-3 text-gray-500">
                  <span className="block">
                    {address.shippingAddress.address}
                  </span>
                  <span className="block">
                    {address.shippingAddress.apartment}
                  </span>
                  <span className="block">{address.shippingAddress.city}</span>
                  <span className="block">
                    {address.shippingAddress.region}
                  </span>
                  <span className="block">
                    {address.shippingAddress.postalCode}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">
                  Payment information
                </dt>
                <dd className="-ml-4 -mt-1 flex flex-wrap">
                  <div className="ml-4 mt-4 flex-shrink-0">
                    <FaCcVisa className="text-blue-800 text-xl" />
                    <p className="sr-only">Visa</p>
                  </div>
                  <div className="ml-4 mt-4">
                    <p className="text-gray-900">Ending with 4242</p>
                    <p className="text-gray-600">Expires 02 / 24</p>
                  </div>
                </dd>
              </div>
            </dl>

            <dl className="mt-8 divide-y divide-gray-200 text-sm lg:col-span-5 lg:mt-0">
              <div className="flex items-center justify-between pb-4">
                <dt className="text-gray-600">Subtotal</dt>
                <dd className="font-medium text-gray-900">
                  ${subtotal.toFixed(2)}
                </dd>
              </div>
              <div className="flex items-center justify-between py-4">
                <dt className="text-gray-600">Shipping</dt>
                <dd className="font-medium text-gray-900">${shippingCharge}</dd>
              </div>
              <div className="flex items-center justify-between py-4">
                <dt className="text-gray-600">Tax</dt>
                <dd className="font-medium text-gray-900">${taxCharge}</dd>
              </div>
              <div className="flex items-center justify-between pt-4">
                <dt className="font-medium text-gray-900">Order total</dt>
                <dd className="font-medium text-cyan-600">
                  ${(subtotal + taxCharge + shippingCharge).toFixed(2)}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
