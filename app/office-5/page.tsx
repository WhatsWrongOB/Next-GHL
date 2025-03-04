"use client";

import { useState, useEffect, Suspense, useContext } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ProgressBar from "../components/ProgressBar";
import { IoIosArrowBack } from "react-icons/io";
import { useOrder } from "../context/OrderContext";

const options = [
  { id: "coffee-training", label: "COFFEE TRAINING" },
  { id: "coffee-advice", label: "COFFEE ADVICE" },
  { id: "overall-guidance", label: "OVERALL GUIDANCE" },
  { id: "new-equipment", label: "NEW EQUIPMENT" },
  { id: "just-coffee", label: "JUST COFFEE" },
];

function Step5Content() {
  const { setWhatNeed } = useOrder();
  const searchParams = useSearchParams();
  const [companyName, setCompanyName] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const router = useRouter();

  const toggleOption = (id: string) => {
    const updatedSelection = selected.includes(id)
      ? selected.filter((item) => item !== id)
      : [...selected, id];
    setWhatNeed(updatedSelection);
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    router.push(`/office-6?selected=${selected.join(",")}`);
  };

  useEffect(() => {
    const companyNameFromParams = searchParams.get("companyName");
    if (companyNameFromParams) {
      setCompanyName(companyNameFromParams);
    }
  }, [searchParams]);

  return (
    <div className="relative w-full min-h-screen font-sans flex flex-col items-center px-4 sm:px-6 lg:px-8 pb-6 text-[#BD1521]">
      <ProgressBar step={3} />
      <IoIosArrowBack
        size={30}
        className="absolute top-[20%] left-4 sm:top-20 sm:left-6 md:top-20 md:left-8 lg:top-20 lg:left-10 hover:bg-[#a2121c]/20 text-[#BD1521] p-1 rounded-full transition-colors"
        onClick={() => router.push("/office-4")}
      />

      <h1 className="text-4xl font-bold text-center mt-10 text-[#BD1521]">
        What does <span className="text-[#BD1521]">{companyName}</span> need?
      </h1>

      <div className="w-full max-w-2xl mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => toggleOption(id)}
            className={`w-full p-4 rounded-lg border-2 transition-all text-lg font-medium shadow-md transform text-center h-20
							${
                selected.includes(id)
                  ? "bg-[#BD1521] text-white border-[#BD1521] hover:bg-[#a2121c] hover:scale-105"
                  : "bg-white text-[#BD1521] border-[#BD1521]/50 hover:border-[#BD1521] hover:bg-[#BD1521]/10"
              }`}
          >
            {selected.includes(id) && "✓ "}
            {label}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        className={`mt-12 px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold tracking-wider shadow-md transform transition-all duration-200 text-lg
					${
            selected.length > 0
              ? "bg-[#BD1521] text-white hover:bg-[#a2121c] hover:scale-105 active:scale-95"
              : "bg-[#BD1521]/10 text-[#BD1521]/50 cursor-not-allowed"
          }`}
        disabled={selected.length === 0}
      >
        NEXT
      </button>
    </div>
  );
}

export default function Step5() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Step5Content />
    </Suspense>
  );
}
