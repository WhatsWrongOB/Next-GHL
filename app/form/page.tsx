"use client";

import { FormEvent, useState } from "react";
import { useOrder } from "../context/OrderContext";

export default function ContactForm() {
  // Form state management
  const { selected } = useOrder();
  const [formData, setFormData] = useState({
    businessName: "",
    townCity: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  console.log("Selected", selected);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/form-proxy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName: formData.businessName,
          townCity: formData.townCity,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          selected,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send contact");
      }

      alert("Form submitted successfully");
      setFormData({
        businessName: "",
        townCity: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 font-sans">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          WE&apos;D LOVE TO SPEAK TO YOU ABOUT YOUR COFFEE NEEDS.
        </h1>
        <p className="text-gray-600">
          Whether it be a wholesale or retail opportunity Get in touch and
          let&apos;s grab a coffee.
        </p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Business Name */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              BUSINESS NAME
            </label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 outline-none transition duration-200"
            />
          </div>

          {/* Town/City */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              TOWN/CITY
            </label>
            <input
              type="text"
              name="townCity"
              value={formData.townCity}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 outline-none transition duration-200"
            />
          </div>

          {/* First Name */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              FIRST NAME
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 outline-none transition duration-200"
            />
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              LAST NAME
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 outline-none transition duration-200"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              EMAIL
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 outline-none transition duration-200"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              PHONE NUMBER
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 outline-none transition duration-200"
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            HOW CAN WE HELP YOU?
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 outline-none transition duration-200 resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="w-full md:w-80 bg-orange-400 text-white py-4 px-8 hover:bg-orange-500 transition duration-200"
          >
            {loading ? "Submitting..." : "GET IN TOUCH"}
          </button>
        </div>
      </form>
    </div>
  );
}
