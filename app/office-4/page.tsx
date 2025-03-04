"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Head from "next/head";
import ProgressBar from "../components/ProgressBar";
import { useOrder } from "../context/OrderContext";
import { IoIosArrowBack } from "react-icons/io";

function CoffeeSelectionComponent() {
  const {
    companyName,
    setCompanyName,
    selectedCoffee,
    setSelectedCoffee,
    setServeCoffee,
  } = useOrder();
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    selectedCoffee ? selectedCoffee.split(",") : []
  );
  const router = useRouter();
  const searchParams = useSearchParams();

  const coffeeOptions = [
    "TRADITIONAL ESPRESSO MACHINE",
    "THROUGH A BEAN TO CUP MACHINE",
    "FILTER COFFEE SERVES",
    "PODS",
  ];

  useEffect(() => {
    const companyNameFromParams = searchParams.get("companyName");
    if (companyNameFromParams) {
      setCompanyName(companyNameFromParams);
    }
  }, [searchParams, setCompanyName]);

  const handleOptionClick = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  useEffect(() => {
    setServeCoffee(selectedOptions);
  }, [selectedOptions]);

  // setServeCoffee((prev) =>
  //   prev.includes(option)
  //     ? prev.filter((item) => item !== option)
  //     : [...prev, option]
  // );

  const handleNext = () => {
    if (companyName && selectedOptions.length > 0) {
      setSelectedCoffee(selectedOptions.join(","));
      const params = new URLSearchParams();
      params.append("companyName", companyName);
      selectedOptions.forEach((option) => params.append("option", option));
      router.push(`/office-5?${params.toString()}`);
    }
  };

  const isOptionSelected = (option: string) => selectedOptions.includes(option);

  return (
    <div className="relative min-h-screen bg-white">
      <IoIosArrowBack
        size={30}
        className="absolute top-[20%] left-4 sm:top-20 sm:left-6 md:top-20 md:left-8 lg:top-20 lg:left-10 hover:bg-red-100 p-1 rounded-full transition-colors"
        onClick={() => router.push("/office-3")}
      />

      <ProgressBar step={2.5} />

      <div className="p-8 flex flex-col items-center justify-center max-w-6xl mx-auto">
        <Head>
          <title>Coffee Selection</title>
          <meta
            name="description"
            content="Select how you want your coffee served"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="py-16 flex flex-col items-center justify-center w-full">
          <h1 className="mb-12 text-4xl font-bold text-center">
            How do you serve your coffee at{" "}
            <span className="text-[#BD1521]">
              {companyName || "Your Business"}
            </span>{" "}
            ?
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
            {coffeeOptions.map((option) => (
              <div
                key={option}
                className={`p-10 border rounded flex justify-center items-center cursor-pointer transition-all h-40 text-center ${
                  isOptionSelected(option)
                    ? "bg-[#BD1521] text-white border-[#BD1521]"
                    : "border-gray-200 hover:border-[#BD1521] bg-white text-[#BD1521]"
                }`}
                onClick={() => handleOptionClick(option)}
              >
                <h2 className="text-xl font-medium">{option}</h2>
              </div>
            ))}
          </div>

          <div className="mt-12 w-full flex justify-center">
            <button
              className={`py-4 px-12 text-xl font-medium uppercase rounded transition-all ${
                companyName && selectedOptions.length > 0
                  ? "bg-[#BD1521] text-white hover:bg-red-800"
                  : "bg-red-100 text-red-300 cursor-not-allowed"
              }`}
              onClick={handleNext}
              disabled={!companyName || selectedOptions.length === 0}
            >
              NEXT
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function CoffeeSelection() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CoffeeSelectionComponent />
    </Suspense>
  );
}
