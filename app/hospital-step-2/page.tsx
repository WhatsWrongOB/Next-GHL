"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import cafe from "../../public/cafe.svg";
import restaurant from "../../public/restaurant.svg";
import hotel from "../../public/hotel.svg";
import others from "../../public/other.svg";
import Image from "next/image";
import ProgressBar from "../components/ProgressBar";
import { IoIosArrowBack } from "react-icons/io";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useOrder } from "../context/OrderContext";

const businessTypes = [
  { image: cafe, label: "Cafe" },
  { image: restaurant, label: "Restaurant" },
  { image: hotel, label: "Hotel" },
  { image: others, label: "Others" },
];

export default function BusinessInfo() {
  const {
    selectedBusinessType,
    setSelectedBusinessType,
    companyName,
    setCompanyName,
  } = useOrder();

  const router = useRouter();

  const handleNext = () => {
    if (companyName && selectedBusinessType) {
      router.push(
        `/hospital-step-3?companyName=${encodeURIComponent(companyName)}`
      );
    }
  };

  return (
    <div className="relative w-full min-h-screen font-sans flex flex-col items-center pb-6 bg-white text-[#BD1521]">
      <IoIosArrowBack
        size={30}
        className="absolute top-[20%] left-4 sm:top-20 sm:left-6 md:top-20 md:left-8 lg:top-20 lg:left-10 hover:bg-[#F5F5F5] p-1 rounded-full transition-colors"
        onClick={() => router.push("/step-1")}
      />

      <ProgressBar step={1.5} />

      <h2 className="text-center text-2xl md:text-3xl font-bold mb-6 mt-10">
        Tell us about your business
      </h2>

      <div className="text-center">
        <h3 className="text-sm font-semibold text-[#BD1521]">BUSINESS NAME</h3>
        <input
          type="text"
          placeholder="Enter your company name..."
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="mt-2 border-b-2 border-[#BD1521] outline-none text-center w-full max-w-xs p-2 text-[#BD1521] placeholder-gray-400"
        />
      </div>

      <Carousel className="w-full max-w-md mt-8">
        <CarouselContent className="flex gap-4">
          {businessTypes.map((item, index) => (
            <CarouselItem key={index} className="w-1/2 md:w-1/4">
              <div className="p-1">
                <Card
                  onClick={() => setSelectedBusinessType(item.label)}
                  className={`cursor-pointer border-2 rounded-lg ${
                    selectedBusinessType === item.label
                      ? "bg-[#BD1521] text-white border-[#BD1521]"
                      : "border-[#BD1521]"
                  }`}
                >
                  <CardContent className="flex flex-col items-center justify-center p-4 md:p-8">
                    <Image
                      src={item.image}
                      alt={item.label}
                      width={160}
                      height={160}
                    />
                    <p
                      className={`text-sm mt-1 ${
                        selectedBusinessType === item.label
                          ? "text-white"
                          : "text-[#BD1521]"
                      }`}
                    >
                      {item.label}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <button
        className={`mt-8 px-6 py-3 font-medium uppercase rounded-lg transition-all duration-200 ${
          companyName && selectedBusinessType
            ? "bg-[#BD1521] text-white hover:opacity-90"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
        onClick={handleNext}
        disabled={!companyName || !selectedBusinessType}
      >
        NEXT
      </button>
    </div>
  );
}
