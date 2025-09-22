"use client";
import { Calendar, CreditCard, Eye } from 'lucide-react';

export default function BillingSection() {
  return (
    <div className="mt-16 space-y-10">
     {/* Flexible Pay-Per-Listing */}
<h2 className="text-2xl font-bold text-gray-900 mb-6">Flexible Pay-Per-Listing</h2>

<div className="bg-[#FFFFFF] rounded-[10px] border border-[#DEE1E6] shadow-[0px_0px_1px_#171a1f0d,0px_0px_2px_#171a1f14] p-5">
  <div className="max-w-4xl mx-auto">
    <div className="mb-2">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">Per-Listing Pricing</h3>
      <p className="text-sm text-gray-500 mb-6">
        Need a flexible option? Pay only when you list a property. Ideal for occasional use.
      </p>
      <p className="text-gray-700 mb-6">
        Each listing costs <span className="font-semibold text-[#3671BAFF]">$9.00</span>. Purchase credits as you need them.
      </p>
      <p className="text-sm text-gray-500 mb-5">
        Credits do not expire and can be used for any property type.
      </p>
      
      <button className="bg-[#3671BAFF] hover:bg-[#244B7B] active:bg-[#17304F]  text-white font-semibold py-2 px-6 rounded-lg transition duration-200 flex items-center gap-2">
        <CreditCard className="h-5 w-5" />
        Manage Listing Credits
      </button>
    </div>
  </div>
</div>

{/* White-Label & Enterprise Solutions */}
<h2 className="text-2xl font-bold text-gray-900 mb-6">White-Label & Enterprise Solutions</h2>

<div className="bg-[#FFFFFF] rounded-[10px] border border-[#DEE1E6] shadow-[0px_0px_1px_#171a1f0d,0px_0px_2px_#171a1f14] p-5">
  <div className="max-w-4xl mx-auto">
    <div className="mb-2">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">Custom Solutions for Your Business</h3>
      <p className="text-sm text-gray-500 mb-6">
        For large organizations, requiring advanced features, white-label branding, and dedicated support.
      </p>
      <p className="text-gray-700 mb-6">
        RealtyFlow offers comprehensive enterprise packages tailored to your specific operational needs.
      </p>
      <p className="text-sm text-gray-500 mb-5">
        Benefits from advanced integrations, SSO, and a dedicated account manager.
      </p>
      
      <button
        className="
          bg-white text-[#171A1FFF] 
          opacity-[1] 
          rounded-[6px] 
          border border-[#DEE1E6] 
          px-6 py-2 font-semibold 
          transition duration-200 
          hover:bg-[#e4e4e4] hover:text-[#444649] 
          active:bg-[#FFFFFF] active:text-[#171A1F] 
          disabled:opacity-40 
        "
      >
        Contact Sales
      </button>
    </div>
  </div>
</div>


 {/* Your Current Subscription */}
<h2 className="text-2xl font-bold text-gray-900 mb-6">
  Your Current Subscription
</h2>

<div className="bg-[#FFFFFF] rounded-[10px] border border-[#DEE1E6] shadow-[0px_0px_1px_#171a1f0d,0px_0px_2px_#171a1f14] p-8">
  <div className="max-w-4xl mx-auto">
    <div className="flex flex-col gap-6">
      {/* Left Side Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
          Active Plan: Solo Agent Pro
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          Includes full access to Client Management and basic subscription
          features.
        </p>

        {/* Next Billing Date + Monthly Cost (separate lines) */}
        <div className="text-sm space-y-2">
          <p className="text-gray-700">
            <span className="font-medium">Next Billing Date:</span><b>July 15, 2024</b>
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Monthly Cost:</span><b> $49.00/month</b>
          </p>
        </div>

        {/* Buttons below Monthly Cost */}
        <div className="flex gap-3 mt-4">
          <button className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg border border-gray-300 transition duration-200 flex items-center gap-2">
            <Eye className="h-4 w-4" />
            View Invoices
          </button>
          <button className="bg-[#3671BAFF] hover:bg-[#244B7B] active:bg-[#17304F] text-white font-medium py-2 px-4 rounded-lg transition duration-200">
            Manage Subscription
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
);
}
