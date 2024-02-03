// Address.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateShippingAddress,
  toggleBillingSameAsShipping,
} from "../../store/addressSlice";

const Address = () => {
  const dispatch = useDispatch();
  const { shippingAddress, billingSameAsShipping } = useSelector(
    (state) => state.address
  );

  const handleShippingAddressChange = (field, value) => {
    dispatch(updateShippingAddress({ [field]: value }));
  };

  const handleBillingSameAsShippingToggle = () => {
    dispatch(toggleBillingSameAsShipping());
  };

  return (
    <div>
      <section aria-labelledby="shipping-heading" className="mt-10">
        <h2 id="shipping-heading" className="text-lg font-medium text-gray-900">
          Shipping address
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
          <div className="sm:col-span-3">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="address"
                name="address"
                autoComplete="street-address"
                value={shippingAddress.address}
                onChange={(e) =>
                  handleShippingAddressChange("address", e.target.value)
                }
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm px-3 py-2 bg-gray-50"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="apartment"
              className="block text-sm font-medium text-gray-700"
            >
              Apartment, suite, etc.
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="apartment"
                name="apartment"
                value={shippingAddress.apartment}
                onChange={(e) =>
                  handleShippingAddressChange("apartment", e.target.value)
                }
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm px-3 py-2 bg-gray-50"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="city"
                name="city"
                autoComplete="address-level2"
                value={shippingAddress.city}
                onChange={(e) =>
                  handleShippingAddressChange("city", e.target.value)
                }
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm px-3 py-2 bg-gray-50"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="region"
              className="block text-sm font-medium text-gray-700"
            >
              State / Province
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="region"
                name="region"
                autoComplete="address-level1"
                value={shippingAddress.region}
                onChange={(e) =>
                  handleShippingAddressChange("region", e.target.value)
                }
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm px-3 py-2 bg-gray-50"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="postal-code"
              className="block text-sm font-medium text-gray-700"
            >
              Postal code
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="postal-code"
                name="postal-code"
                autoComplete="postal-code"
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  handleShippingAddressChange("postalCode", e.target.value)
                }
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm px-3 py-2 bg-gray-50"
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="billing-heading" className="mt-10">
        <h2 id="billing-heading" className="text-lg font-medium text-gray-900">
          Billing information
        </h2>

        <div className="mt-6 flex items-center">
          <input
            id="same-as-shipping"
            name="same-as-shipping"
            type="checkbox"
            checked={billingSameAsShipping}
            onChange={handleBillingSameAsShippingToggle}
            className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500 bg-gray-50"
          />
          <div className="ml-2">
            <label
              htmlFor="same-as-shipping"
              className="text-sm font-medium text-gray-900"
            >
              Same as shipping information
            </label>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Address;
