"use client";
import { useState } from "react";

export default function CheckoutForm() {
  const [selectedOption, setSelectedOption] = useState("economy");

  return (
    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-4">
      <h2 className="text-xl font-bold">Contact</h2>
      <div className="md:col-span-5">
        <input
          type="text"
          name="email"
          id="email"
          className="h-10 mt-1 outline outline-1 outline-gray-500/50 rounded px-4 w-full bg-white dark:bg-black focus:outline-blue-600"
          value=""
          placeholder="Email Address"
          readOnly
        />
      </div>
      <div className="md:col-span-5">
        <input
          type="text"
          name="email"
          id="email"
          className="h-10 mt-1 outline outline-1 outline-gray-500/50 rounded px-4 w-full bg-white dark:bg-black focus:outline-blue-600"
          value=""
          placeholder="Mobile Phone Number"
          readOnly
        />
      </div>

      <h2 className="text-xl font-bold mt-6">Shipping Address</h2>
      <div className="md:col-span-5">
        <input
          type="text"
          name="full_name"
          id="full_name"
          className="h-10 mt-1 outline outline-1 outline-gray-500/50 rounded px-4 w-full bg-white dark:bg-black focus:outline-blue-600"
          value=""
          placeholder="Full Name"
          readOnly
        />
      </div>

      <div className="md:col-span-5">
        <input
          type="text"
          name="address"
          id="address"
          className="h-10 mt-1 outline outline-1 outline-gray-500/50 rounded px-4 w-full bg-white dark:bg-black focus:outline-blue-600"
          value=""
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
          value=""
          placeholder="City"
          readOnly
        />
      </div>

      <div className="md:col-span-1">
        <input
          name="state"
          id="state"
          placeholder="State"
          className="h-10 mt-1 outline outline-1 outline-gray-500/50 rounded px-4 w-full bg-white dark:bg-black focus:outline-blue-600"
          value=""
          readOnly
        />
      </div>

      <div className="md:col-span-3">
        <input
          type="text"
          name="zipcode"
          id="zipcode"
          className="h-10 mt-1 outline outline-1 outline-gray-500/50 rounded px-4 w-full bg-white dark:bg-black focus:outline-blue-600"
          placeholder="ZIP Code"
          value=""
          readOnly
        />
      </div>

      <h2 className="text-xl font-bold mt-6">Shipping Method</h2>
      <ul className="text-sm font-medium text-gray-900 bg-white dark:bg-black outline outline-1 outline-gray-500/50 rounded dark:text-white md:col-span-5">
        <li
          className={`w-full p-4 ${
            selectedOption == "economy"
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
                onChange={(e) => setSelectedOption(e.target.value)}
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
            selectedOption == "standard"
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
                onChange={(e) => setSelectedOption(e.target.value)}
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

      <div className="md:col-span-5 text-right">
        <div className="inline-flex items-end">
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded my-6">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
