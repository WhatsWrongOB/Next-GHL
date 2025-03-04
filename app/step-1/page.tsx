"use client";
import { useRouter } from "next/navigation";
import { FaBuilding, FaStore } from "react-icons/fa";
import { useOrder } from "../context/OrderContext";
import ProgressBar from "../components/ProgressBar";
import Link from "next/link";

export default function StepOne() {
  const router = useRouter();
  const { selected, setSelected } = useOrder();

  const handleSelect = (option: string) => {
    setSelected(option);
  };

  const handleNext = () => {
    if (selected === "OFFICE BUSINESS") {
      router.push("/step-2");
    } else if (selected === "HOSPITALITY BUSINESS") {
      router.push("/hospital-step-2");
    }
  };

  return (
    <div className="relative w-full min-h-screen font-sans flex flex-col items-center pb-6 text-[#BD1521] bg-white">
      <ProgressBar step={1} />

      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8 mt-10 text-[#BD1521]">
        Let&apos;s get started! Do you need coffee for...
      </h2>

      {/* Selection Boxes */}
      <div className="grid md:grid-cols-2 gap-6 max-w-2xl w-full mt-6">
        <div
          className={`border-2 rounded-2xl p-16 flex flex-col items-center justify-center cursor-pointer transition-all duration-200 shadow-md ${
            selected === "OFFICE BUSINESS"
              ? "bg-[#BD1521] text-white border-[#BD1521] scale-105"
              : "bg-white text-[#BD1521] border-[#BD1521] hover:bg-[#FCE4E6] hover:scale-105"
          }`}
          onClick={() => handleSelect("OFFICE BUSINESS")}
        >
          <FaBuilding size={70} className="text-inherit" />
          <h3 className="mt-4 font-semibold text-inherit">OFFICE</h3>
        </div>

        <div
          className={`border-2 rounded-2xl p-16 flex flex-col items-center justify-center cursor-pointer transition-all duration-200 shadow-md ${
            selected === "HOSPITALITY BUSINESS"
              ? "bg-[#BD1521] text-white border-[#BD1521] scale-105"
              : "bg-white text-[#BD1521] border-[#BD1521] hover:bg-[#FCE4E6] hover:scale-105"
          }`}
          onClick={() => handleSelect("HOSPITALITY BUSINESS")}
        >
          <FaStore size={70} className="text-inherit" />
          <h3 className="mt-4 font-semibold text-inherit text-center">
            HOSPITALITY BUSINESS
          </h3>
        </div>
      </div>

      {/* Alternative Option */}
      <div className="mt-6">
        <Link
          onClick={() => handleSelect("LOOKING FOR SOMETHING ElSE")}
          href="/form"
        >
          <p className="text-sm underline font-medium text-[#BD1521] hover:text-[#a2121c] transition-colors">
            Looking for something else?
          </p>
        </Link>
      </div>

      {/* Next Button */}
      <button
        className={`inline-block mt-6 py-3 px-6 font-semibold rounded-lg text-base shadow-lg transition-all duration-200 ${
          selected
            ? "bg-[#BD1521] text-white hover:bg-[#a2121c] hover:scale-105 active:scale-95"
            : "bg-[#FCE4E6] text-[#BD1521] cursor-not-allowed"
        }`}
        onClick={handleNext}
        disabled={!selected}
      >
        NEXT
      </button>
    </div>
  );
}
