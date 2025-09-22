"use client";
import PlanSection from '../components/Monitization-comp/PlanSection';
import FeatureComparison from '../components/Monitization-comp/FeatureComparison';
import BillingSection from '../components/Monitization-comp/BillingSection';

export default function MonetizationPage() {
  return (
    <div className="min-h-screen  py-7 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
       <div className="text-left  mb-5">

   <h1 className="text-3xl leading-9 font-bold text-[#171A1FFF] mb-4">
  Monetization & Billing
</h1>



          <div className=" max-w-2xl">
          <p className="text-[15px] leading-6  text-neutral-600 ">
  Explore RealtyFlow's powerful plans designed to empower your real estate business. 
  Choose the option that best fits your needs, from solo agents to large agencies.
</p>

          </div>
        </div>

        {/* Plans Section */}
        <PlanSection />
        
        {/* Feature Comparison */}
        <FeatureComparison />
        
  {/* Billing  Section */}
        <BillingSection />
      </div>
    </div>
  );
}