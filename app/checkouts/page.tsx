import Image from "next/image";
import Footer from "@/components/layout/footer";
import CheckoutsItems from "@/components/checkouts/CheckoutsItems";

export default function Checkouts() {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="px-4 pb-8 lg:px-6">
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
          <div>
            <div className="p-4 md:p-8 mb-6">
              <div className="grid gap-14 gap-y-2 text-sm grid-cols-1 lg:grid-cols-6">
                <div className="lg:order-1 order-2 lg:col-span-4">
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
                    <ul className="text-sm font-medium text-gray-900 bg-white outline outline-1 outline-gray-500/50 rounded dark:text-white md:col-span-5">
                      <li className="w-full border-b border-gray-500/50 p-4">
                        <label htmlFor="list-radio-license">
                          <div className="flex items-start">
                            <input
                              id="list-radio-license"
                              type="radio"
                              value=""
                              name="list-radio"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 mr-2 mt-1"
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
                      <li className="w-full dark:border-gray-600 p-4">
                        <label htmlFor="list-radio-id">
                          <div className="flex items-start">
                            <input
                              id="list-radio-id"
                              type="radio"
                              value=""
                              name="list-radio"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 mr-2 mt-1"
                              readOnly
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
                </div>

                <CheckoutsItems />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
