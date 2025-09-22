"use client";
import { Check, X } from "lucide-react";

export default function FeatureComparison() {
  const features = [
    {
      name: "Client Relationship Management",
      soloAgent: true,
      agencyTeam: true,
      enterprise: true,
    },
    {
      name: "Property Listings",
      soloAgent: "10 listings",
      agencyTeam: "Unlimited",
      enterprise: "Unlimited",
    },
    {
      name: "Team Collaboration",
      soloAgent: false,
      agencyTeam: true,
      enterprise: true,
    },
    {
      name: "Advanced Analytics",
      soloAgent: false,
      agencyTeam: true,
      enterprise: true,
    },
    {
      name: "Dedicated Support",
      soloAgent: false,
      agencyTeam: true,
      enterprise: true,
    },
    {
      name: "User Accounts",
      soloAgent: "1",
      agencyTeam: "5",
      enterprise: "Unlimited",
    },
    {
      name: "White-Label Branding",
      soloAgent: false,
      agencyTeam: false,
      enterprise: true,
    },
    {
      name: "API Access & SSO",
      soloAgent: false,
      agencyTeam: false,
      enterprise: true,
    },
  ];

  const renderFeatureValue = (value) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-[#3671BAFF] mx-auto" />
      ) : (
        <X className="h-5 w-5 text-[#565D6DFF] mx-auto" />
      );
    }
    return <span className="text-gray-700 text-sm">{value}</span>;
  };

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-left">
        Feature Comparison
      </h2>

      <div className="bg-white rounded-[15px] shadow-lg overflow-hidden max-w-5xl mx-auto">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F3F4F6FF]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#565D6DFF]">
                  Feature
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-[#565D6DFF]">
                  Solo Agent Pro
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-[#565D6DFF]">
                  Agency Team
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className="odd:bg-white even:bg-[#F3F4F6FF] hover:bg-gray-100"
                >
                  <td className="px-6 py-4 text-sm font-[600] text-[#171A1FFF]">
                    {feature.name}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {renderFeatureValue(feature.soloAgent)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {renderFeatureValue(feature.agencyTeam)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
