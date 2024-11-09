"use client";
import { useState } from "react";

export default function CheckoutForm() {
  const [shippingOption, setShippingOption] = useState("economy");

  return (
    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-4">
      <h2 className="text-xl font-bold md:col-span-4">Contact Information</h2>
      <div className="md:col-span-4">
        <input
          type="email"
          name="email"
          id="email"
          className="h-10 mt-1 outline outline-1 outline-gray-500/50 rounded px-4 w-full bg-white dark:bg-black focus:outline-blue-600"
          placeholder="Email Address"
          readOnly
        />
      </div>
      <div className="md:col-span-4">
        <input
          type="tel"
          name="phone"
          id="phone"
          className="h-10 mt-1 outline outline-1 outline-gray-500/50 rounded px-4 w-full bg-white dark:bg-black focus:outline-blue-600"
          placeholder="Mobile Phone Number"
          readOnly
        />
      </div>

      <h2 className="text-xl font-bold mt-6 md:col-span-4">Shipping Address</h2>
      <div className="md:col-span-2">
        <input
          type="text"
          name="fullName"
          id="fullName"
          className="h-10 mt-1 outline outline-1 outline-gray-500/50 rounded px-4 w-full bg-white dark:bg-black focus:outline-blue-600"
          placeholder="Full Name"
          readOnly
        />
      </div>
      <div className="md:col-span-2">
        <input
          type="text"
          name="fullName"
          id="fullName"
          className="h-10 mt-1 outline outline-1 outline-gray-500/50 rounded px-4 w-full bg-white dark:bg-black focus:outline-blue-600"
          placeholder="Full Name"
          readOnly
        />
      </div>

      <div className="md:col-span-3">
        <input
          type="text"
          name="address"
          id="address"
          className="h-10 mt-1 outline outline-1 outline-gray-500/50 rounded px-4 w-full bg-white dark:bg-black focus:outline-blue-600"
          placeholder="Address"
          readOnly
        />
      </div>

      <div className="md:col-span-1">
        <input
          type="text"
          name="city"
          id="city"
          className="h-10 mt-1 outline outline-1 outline-gray-500/50 rounded px-4 w-full bg-white dark:bg-black focus:outline-blue-600"
          placeholder="City"
          readOnly
        />
      </div>

      <div className="md:col-span-2">
        <input
          name="state"
          id="state"
          placeholder="State"
          className="h-10 mt-1 outline outline-1 outline-gray-500/50 rounded px-4 w-full bg-white dark:bg-black focus:outline-blue-600"
          value=""
          readOnly
        />
      </div>

      <div className="md:col-span-2">
        <input
          type="text"
          name="zipCode"
          id="zipCode"
          className="h-10 mt-1 outline outline-1 outline-gray-500/50 rounded px-4 w-full bg-white dark:bg-black focus:outline-blue-600"
          placeholder="ZIP Code"
          value=""
          readOnly
        />
      </div>

      <div className="md:col-span-4">
        <textarea
          id="specialInstructions"
          rows={4}
          className="mt-1 p-2.5 w-full outline outline-1 outline-gray-500/50 rounded w-full bg-white dark:bg-black focus:outline-blue-600"
          placeholder="Special Instructions (Optional)"
        />
      </div>

      <h2 className="text-xl font-bold mt-6 md:col-span-4">Shipping Method</h2>
      <ul className="text-sm font-medium text-gray-900 bg-white dark:bg-black outline outline-1 outline-gray-500/50 rounded dark:text-white md:col-span-4">
        <li
          className={`w-full p-4 ${
            shippingOption == "economy"
              ? "outline outline-2 outline-blue-600 rounded"
              : "border-b border-gray-500/50"
          }`}
        >
          <label htmlFor="list-radio-license">
            <div className="flex items-start">
              <input
                id="list-radio-license"
                type="radio"
                value="economy"
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 mr-2 mt-1"
                onChange={(e) => setShippingOption(e.target.value)}
                defaultChecked
              />
              <p className="w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                Economy <br />
                <span className="text-gray-400 dark:text-gray-500">
                  5 to 8 business days
                </span>
              </p>
              <p className="font-bold">$4.90</p>
            </div>
          </label>
        </li>
        <li
          className={`w-full p-4 ${
            shippingOption == "standard"
              ? "outline outline-2 outline-blue-600 rounded"
              : "border-b border-gray-500/50"
          }`}
        >
          <label htmlFor="list-radio-id">
            <div className="flex items-start">
              <input
                id="list-radio-id"
                type="radio"
                value="standard"
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 mr-2 mt-1"
                onChange={(e) => setShippingOption(e.target.value)}
              />
              <p className="w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                Standard <br />
                <span className="text-gray-400 dark:text-gray-500">
                  3 to 4 business days
                </span>
              </p>
              <p className="font-bold">$6.90</p>
            </div>
          </label>
        </li>
      </ul>

      <div className="md:col-span-4 text-right">
        <p className="mt-8 text-gray-400 font-medium">
          Secure Payment with Lorem
        </p>
        <div className="inline-flex items-end">
          <button className="py-3 px-6 my-4 block w-full rounded-full bg-blue-600 p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
