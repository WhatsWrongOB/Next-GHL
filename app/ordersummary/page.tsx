"use client";

import { useOrder } from "../context/OrderContext";
import { ExternalLink, Coffee } from "lucide-react";
import ProgressBar from "../components/ProgressBar";

const OrderSummary = () => {
  const {
    selected,
    companyName,
    selectedEmployees,
    selectedCoffee,
    coffeeQuantity,
  } = useOrder();

  // Static price calculation
  const PRICE_PER_KG = 17.95;
  const totalPrice = coffeeQuantity.kg * PRICE_PER_KG;


  return (
    <div>
      <ProgressBar step={5} />
      <h1 className="text-[35px] text-[#1b3a3a] font-extrabold mb-6 text-center mt-3">
        Order Summary
      </h1>

      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        {/* Header Section */}
        <h1 className="text-[28px] text-[#1b3a3a] font-medium mb-6">
          Order Details
        </h1>

        {/* Main Container */}
        <div className="bg-[#f5f5f5] rounded-lg p-6 space-y-4">
          {/* Company Name Section */}
          <div className="bg-white rounded-lg p-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[#5e7b7b] text-sm font-medium">
                COMPANY NAME
              </span>
              <ExternalLink className="w-4 h-4 text-[#5e7b7b]" />
            </div>
            <p className="text-[#1b3a3a] text-xl font-medium">{companyName}</p>
          </div>

          {/* Organization Type and Employees */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[#5e7b7b] text-sm font-medium">
                  ORGANISATION TYPE
                </span>
                <ExternalLink className="w-4 h-4 text-[#5e7b7b]" />
              </div>
              <p className="text-[#1b3a3a] text-xl font-medium">{selected}</p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[#5e7b7b] text-sm font-medium">
                  EMPLOYEES
                </span>
                <ExternalLink className="w-4 h-4 text-[#5e7b7b]" />
              </div>
              <p className="text-[#1b3a3a] text-xl font-medium">
                {selectedEmployees}
              </p>
            </div>
          </div>

          {/* Frequency */}
          <div className="bg-white rounded-lg p-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[#5e7b7b] text-sm font-medium">
                FREQUENCY
              </span>
              <ExternalLink className="w-4 h-4 text-[#5e7b7b]" />
            </div>
            <p className="text-[#1b3a3a] text-xl font-medium">
              {coffeeQuantity.kg}kg every {coffeeQuantity.days} days
            </p>
          </div>

          {/* Brew Method */}
          <div className="bg-white rounded-lg p-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[#5e7b7b] text-sm font-medium">
                BREW METHOD
              </span>
              <ExternalLink className="w-4 h-4 text-[#5e7b7b]" />
            </div>
            <div className="flex items-center gap-3">
              <Coffee className="w-8 h-8 text-[#1b3a3a]" />
              <span className="text-[#1b3a3a] text-xl font-medium">
                {selectedCoffee || "Pre-Ground Espresso"}
              </span>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="pt-4">
            <h2 className="text-[28px] text-[#1b3a3a] font-medium mb-6">
              Order Summary
            </h2>

            <div className="space-y-6">
              {/* Coffee Order */}
              <div className="flex justify-between items-start border-b border-gray-200 pb-4">
                <div>
                  <p className="text-[#1b3a3a] text-lg font-medium">
                    Bourbon Cream Espresso
                  </p>
                  <p className="text-[#5e7b7b]">
                    {" "}
                    {coffeeQuantity.kg} x 1kg bag
                  </p>
                </div>
                <p className="text-[#1b3a3a] text-lg font-medium">
                  £{totalPrice.toFixed(2)}
                </p>
              </div>

              {/* Delivery */}
              <div className="flex justify-between items-start border-b border-gray-200 pb-4">
                <div>
                  <p className="text-[#1b3a3a] text-lg font-medium">Delivery</p>
                  <p className="text-[#5e7b7b]">Royal Mail Tracked 24</p>
                </div>
                <p className="text-[#1b3a3a] text-lg font-medium">Free</p>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center">
                <p className="text-[#1b3a3a] text-lg font-medium">Total</p>
                <p className="text-[#1b3a3a] text-lg font-medium">
                  £{totalPrice.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full bg-[#ff9f43] text-white py-3 rounded-md mt-6 font-medium">
              ORDER PACKAGE
            </button>

            {/* Footer Text */}
            <p className="text-center text-sm text-[#5e7b7b] mt-4">
              If you are not ready or would like to discuss your organisations
              requirements please{" "}
              <a
                href="#"
                className="text-[#1b3a3a] font-medium hover:underline"
              >
                get in touch &gt;
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
