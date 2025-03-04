"use client";
import { createContext, useContext, useState } from "react";

interface OrderContextType {
  selected: string | null;
  companyName: string;
  selectedEmployees: number | string | null;
  region: string;
  selectedCoffee: string | null;
  whatNeed: string[];
  serveCoffee: string[];
  coffeeQuantity: { kg: number; days: number };
  fullName: string; // Added fullName field
  email: string; // Added email field
  phone: string; // Added phone field
  additionalInfo: string; // Added additionalInfo field
  wantsSample: boolean; // Added wantsSample field
  setSelected: (value: string | null) => void;
  setWhatNeed: (value: string[]) => void;
  setServeCoffee: (value: string[]) => void;
  setCompanyName: (value: string) => void;
  setSelectedEmployees: (value: number | string | null) => void;
  setRegion: (value: string) => void;
  setSelectedCoffee: (value: string | null) => void;
  setCoffeeQuantity: (value: { kg: number; days: number }) => void;
  setFullName: (value: string) => void; // Added setFullName method
  setEmail: (value: string) => void; // Added setEmail method
  setPhone: (value: string) => void; // Added setPhone method
  setAdditionalInfo: (value: string) => void; // Added setAdditionalInfo method
  setWantsSample: (value: boolean) => void; // Added setWantsSample method
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [companyName, setCompanyName] = useState<string>("");
  const [selectedEmployees, setSelectedEmployees] = useState<
    number | string | null
  >(null);

  const [selectedCoffee, setSelectedCoffee] = useState<string | null>(null);
  const [region, setRegion] = useState<string>("");
  const [coffeeQuantity, setCoffeeQuantity] = useState<{
    kg: number;
    days: number;
  }>({
    kg: 1,
    days: 28,
  });
  const [fullName, setFullName] = useState<string>(""); // Added state for fullName
  const [email, setEmail] = useState<string>(""); // Added state for email
  const [phone, setPhone] = useState<string>(""); // Added state for phone
  const [additionalInfo, setAdditionalInfo] = useState<string>(""); // Added state for additionalInfo
  const [wantsSample, setWantsSample] = useState<boolean>(false); // Added state for wantsSample
  const [serveCoffee, setServeCoffee] = useState<string[]>([]);
  const [whatNeed, setWhatNeed] = useState<string[]>([]);

  console.log({
    selected,
    companyName,
    selectedEmployees,
    region,
    coffeeQuantity,
    fullName,
    email,
    phone,
    additionalInfo,
    wantsSample,
    serveCoffee,
    whatNeed,
  });

  return (
    <OrderContext.Provider
      value={{
        selected,
        companyName,
        selectedEmployees,
        region,
        selectedCoffee,
        serveCoffee,
        setServeCoffee,
        setWhatNeed,
        whatNeed,
        coffeeQuantity,
        fullName, // Added fullName to context value
        email, // Added email to context value
        phone, // Added phone to context value
        additionalInfo, // Added additionalInfo to context value
        wantsSample, // Added wantsSample to context value
        setSelected,
        setCompanyName,
        setSelectedEmployees,
        setRegion,
        setSelectedCoffee,
        setCoffeeQuantity,
        setFullName, // Added setFullName to context value
        setEmail, // Added setEmail to context value
        setPhone, // Added setPhone to context value
        setAdditionalInfo, // Added setAdditionalInfo to context value
        setWantsSample, // Added setWantsSample to context value
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};
