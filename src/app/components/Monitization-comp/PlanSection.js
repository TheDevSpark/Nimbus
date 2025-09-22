"use client";
import { Check } from "lucide-react";

export default function PlanSection() {
  const plans = [
    {
      name: "Solo Agent Pro",
      description:
        "Ideal for individual agents looking to streamline operations.",
      price: "$49",
       priceColor: "text-[#3671BAFF]",
       checkColor: "text-[#3671BAFF]",
      period: "/month",
      features: [
        "Client Relationship Management",
        "Property Listings (Up to 10)",
        "Basic Analytics & Reporting",
        "Email & Chat Support",
        "Document Templates Access",
      ],
      buttonText: "Subscribe Now",
      isCurrentPlan: false,
      buttonVariant: "blue",
    },
    {
      name: "Agency Team",
      description:
        "Comprehensive features for growing real estate agencies (up to 5 users).",
      price: "$199",
         priceColor: "text-[#19191FFF]",
      period: "/month",
      checkColor: "text-[#19191FFF]",
      bgColor: "bg-[ #F3F7FCFF]",
      features: [
        "All Solo Agent Pro features",
        "Team Collaboration Tools",
        "Unlimited Property Listings",
        "Advanced Analytics & ROI Tracking",
        "Dedicated Phone Support",
        "5 User Accounts Included",
      ],
      buttonText: "Current Plan",
      isCurrentPlan: true,
      buttonVariant: "white",
    },
    {
      name: "Enterprise Solutions",
      description:
        "Tailored for large agencies and franchises with specific needs.",
      price: "Custom",
      period: "/month",
      priceColor: "text-[#3671BAFF]",
      checkColor: "text-[#3671BAFF]",
      features: [
        "Customizable CRM workflows",
        "White-Label Branding",
        "Advanced API Integrations",
        "Single Sign-On (SSO)",
        "Premium 24/7 Support",
        "Unlimited Users",
      ],
      buttonText: "Subscribe Now",
      isCurrentPlan: false,
      buttonVariant: "blue",
    },
  ];

  const buttonBase =
    "w-full py-2 font-medium rounded-md disabled:opacity-40";

  const buttonVariants = {
    blue: "text-white bg-[#3671BA] hover:bg-[#244B7B] active:bg-[#17304F] border-0",
    white:
      "text-[#171A1F] bg-white hover:bg-[#DEE1E6] active:bg-[#BDC1CA] border-0",
  };

  return (
    <div className="mb-8">
      <h2 className="text-[24px] font-bold text-[#171A1F] mb-4  text-left">
        Choose Your Perfect Plan
      </h2>

      <div className="grid md:grid-cols-3 gap-4  max-w-5xl mx-auto">
        {plans.map((plan, index) => (
         <div

     
  key={index}
  className={`rounded-[20px] shadow-lg p-4 border  ${
          plan.bgColor || "bg-white "
        }
    ${
      plan.isCurrentPlan
        ? "bg-[#F3F7FC] border-2 border-[#3671BA] shadow-[0px_0px_1px_rgba(23,26,31,0.87),0px_0px_2px_rgba(23,26,31,0.08)]"
        : "border border-gray-200"
    }`}
>
  <div className="text-center pt-3 mb-6">
    <h2 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h2>
    <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
    <div className="mb-6">
      <span
        className={`text-4xl font-extrabold ${
          plan.priceColor || "text-gray-900"
        }`}
      >
        {plan.price}
      </span>
      <span className="text-gray-600">{plan.period}</span>
    </div>
  </div>

  <ul className="space-y-1 mb-4">
    {plan.features.map((feature, featureIndex) => (
      <li key={featureIndex} className="flex items-center">
        <Check className={`h-5 w-9  ${plan.checkColor} mr-3 flex-shrink-0`} />
        <span className="text-[14px] text-gray-700">{feature}</span>
      </li>
    ))}
  </ul>

  {/* Button with conditional margin for first card */}
  <button
    className={`${buttonBase} ${buttonVariants[plan.buttonVariant]} ${
      index === 0 ? "mt-8" : ""
    }`}
  >
    {plan.buttonText}
  </button>
</div>

        ))}
      </div>
    </div>
  );
}
