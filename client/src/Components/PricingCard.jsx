import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const PricingCard = ({
  title,
  price,
  description,
  features,
  Duration,
  dark = false,
  loading = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasMoreThanTwelve = features?.length > 12;
  const visibleFeatures = isExpanded ? features : features?.slice(0, 12);
  const phoneNumber = import.meta.env.VITE_PHONE_NO;

  const handleWhatsAppChat = () => {
    // const phoneNumber = ""; // ✅ Change this to your WhatsApp business number (without +)
    const message = `Hi, I'm interested in the ${title} plan. Please provide more details.`;
    const url = `https://wa.me/+91${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  if (loading) {
    return (
      <div className="animate-pulse rounded-[5px] p-8 w-full max-w-md shadow-md border border-slate-300 bg-gray-100">
        <div className="h-4 w-1/3 bg-gray-300 rounded mb-4"></div>
        <div className="h-8 w-1/2 bg-gray-400 rounded mb-4"></div>
        <div className="h-4 w-full bg-gray-300 rounded mb-3"></div>
        <div className="h-4 w-5/6 bg-gray-300 rounded mb-3"></div>
        <div className="h-4 w-2/3 bg-gray-300 rounded mb-6"></div>
        <div className="space-y-2 mb-4">
          {Array(6)
            .fill(0)
            .map((_, idx) => (
              <div key={idx} className="h-3 w-full bg-gray-300 rounded"></div>
            ))}
        </div>
        <div className="h-10 bg-gray-400 rounded"></div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col justify-between rounded-[5px] p-8 w-full max-w-md shadow-md transition-all duration-300 ${
        dark
          ? "bg-black text-white"
          : "bg-white text-black border border-slate-900"
      }`}
    >
      <div>
        <h4 className="text-sm font-semibold uppercase mb-2 text-left">
          {title}
        </h4>
        <div className="flex items-baseline mb-4 text-left">
          <span className="text-4xl font-bold">{price}</span>
          <span className="ml-1 text-sm">{Duration}</span>
        </div>
        <p
          className={`text-[16px] font-Poppins sm:text-sm mb-4 text-left ${
            dark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>
        <hr
          className={`my-4 ${dark ? "border-gray-700" : "border-gray-200"}`}
        />
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-[100vh]" : "max-h-[300px]"
          }`}
        >
          <ul className="space-y-2 text-sm text-left">
            {visibleFeatures?.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FaCheck className="text-green-400 text-base shrink-0 mt-1" />
                <span className="font-Poppins">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {hasMoreThanTwelve && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`text-sm mt-4 underline transition-colors ${
              dark
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-black"
            }`}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        )}
      </div>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppChat}
        className={`rounded-full px-6 py-2 text-sm font-semibold w-full mt-4 ${
          dark
            ? "bg-white text-black hover:bg-gray-200"
            : "bg-green-600 text-white hover:bg-green-700"
        }`}
      >
        Chat on WhatsApp
      </button>
    </div>
  );
};

export default PricingCard;
