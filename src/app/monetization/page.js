"use client";
import { useMemo, useState } from "react";
import { properties } from "../data";

// Mock monetization data
const mockPricingPlans = [
  {
    id: "basic",
    name: "Basic",
    price: 29,
    period: "month",
    features: [
      "Up to 10 properties",
      "Basic analytics",
      "Email support",
      "Standard templates"
    ],
    popular: false
  },
  {
    id: "professional",
    name: "Professional",
    price: 79,
    period: "month",
    features: [
      "Up to 50 properties",
      "Advanced analytics",
      "Priority support",
      "Custom branding",
      "API access",
      "Document management"
    ],
    popular: true
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 199,
    period: "month",
    features: [
      "Unlimited properties",
      "Full analytics suite",
      "24/7 phone support",
      "White-label solution",
      "Advanced integrations",
      "Custom workflows",
      "Dedicated account manager"
    ],
    popular: false
  }
];

const mockRevenue = [
  { month: "Jan", subscriptions: 12500, commissions: 8500, addons: 2200, total: 23200 },
  { month: "Feb", subscriptions: 13800, commissions: 9200, addons: 2800, total: 25800 },
  { month: "Mar", subscriptions: 15200, commissions: 10800, addons: 3200, total: 29200 },
  { month: "Apr", subscriptions: 16800, commissions: 12500, addons: 3800, total: 33100 },
  { month: "May", subscriptions: 18500, commissions: 14200, addons: 4200, total: 36900 },
  { month: "Jun", subscriptions: 20200, commissions: 15800, addons: 4800, total: 40800 },
];

const mockCommissions = [
  { agent: "Sarah Johnson", properties: 8, totalValue: 4200000, commissionRate: 3.5, commission: 147000, status: "paid" },
  { agent: "Mike Chen", properties: 6, totalValue: 3200000, commissionRate: 3.0, commission: 96000, status: "pending" },
  { agent: "Emily Davis", properties: 5, totalValue: 2800000, commissionRate: 3.2, commission: 89600, status: "paid" },
  { agent: "David Wilson", properties: 4, totalValue: 2200000, commissionRate: 3.0, commission: 66000, status: "pending" },
];

const mockSubscriptions = [
  { id: "sub1", customer: "ABC Realty", plan: "Professional", status: "active", revenue: 79, startDate: "2024-01-15", nextBilling: "2025-02-15" },
  { id: "sub2", customer: "Metro Properties", plan: "Enterprise", status: "active", revenue: 199, startDate: "2024-02-01", nextBilling: "2025-02-01" },
  { id: "sub3", customer: "Coastal Homes", plan: "Basic", status: "active", revenue: 29, startDate: "2024-03-10", nextBilling: "2025-02-10" },
  { id: "sub4", customer: "Urban Living", plan: "Professional", status: "cancelled", revenue: 0, startDate: "2024-01-20", nextBilling: null },
];

export default function MonetizationPage() {
  const [activeTab, setActiveTab] = useState("pricing");
  const [selectedPlan, setSelectedPlan] = useState("professional");

  const totalRevenue = mockRevenue.reduce((sum, r) => sum + r.total, 0);
  const monthlyRecurringRevenue = mockSubscriptions.filter(s => s.status === "active").reduce((sum, s) => sum + s.revenue, 0);
  const totalCommissions = mockCommissions.reduce((sum, c) => sum + c.commission, 0);
  const pendingCommissions = mockCommissions.filter(c => c.status === "pending").reduce((sum, c) => sum + c.commission, 0);

  const activeSubscriptions = mockSubscriptions.filter(s => s.status === "active").length;
  const churnRate = (mockSubscriptions.filter(s => s.status === "cancelled").length / mockSubscriptions.length) * 100;

  return (
    <div className="max-w-[1400px] mx-auto">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <h1 className="text-lg sm:text-xl font-semibold">Monetization</h1>
        <div className="flex items-center gap-2">
          <button 
            className={`px-3 py-2 text-sm rounded-md ${activeTab === "pricing" ? "bg-blue-600 text-white" : "border border-black/10"}`}
            onClick={() => setActiveTab("pricing")}
          >
            Pricing Plans
          </button>
          <button 
            className={`px-3 py-2 text-sm rounded-md ${activeTab === "revenue" ? "bg-blue-600 text-white" : "border border-black/10"}`}
            onClick={() => setActiveTab("revenue")}
          >
            Revenue Tracking
          </button>
          <button 
            className={`px-3 py-2 text-sm rounded-md ${activeTab === "commissions" ? "bg-blue-600 text-white" : "border border-black/10"}`}
            onClick={() => setActiveTab("commissions")}
          >
            Commissions
          </button>
        </div>
      </header>

      {/* Key Metrics */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="rounded-lg border border-black/10 bg-white p-4">
          <p className="text-xs text-neutral-500">Monthly Recurring Revenue</p>
          <p className="mt-2 text-2xl font-bold text-green-600">
            ${monthlyRecurringRevenue.toLocaleString()}
          </p>
          <p className="text-xs text-green-600 mt-1">+18.5% vs last month</p>
        </div>
        <div className="rounded-lg border border-black/10 bg-white p-4">
          <p className="text-xs text-neutral-500">Total Revenue (6M)</p>
          <p className="mt-2 text-2xl font-bold text-blue-600">
            ${totalRevenue.toLocaleString()}
          </p>
          <p className="text-xs text-blue-600 mt-1">+22.3% vs last period</p>
        </div>
        <div className="rounded-lg border border-black/10 bg-white p-4">
          <p className="text-xs text-neutral-500">Active Subscriptions</p>
          <p className="mt-2 text-2xl font-bold text-purple-600">
            {activeSubscriptions}
          </p>
          <p className="text-xs text-purple-600 mt-1">+3 this month</p>
        </div>
        <div className="rounded-lg border border-black/10 bg-white p-4">
          <p className="text-xs text-neutral-500">Churn Rate</p>
          <p className="mt-2 text-2xl font-bold text-orange-600">
            {churnRate.toFixed(1)}%
          </p>
          <p className="text-xs text-orange-600 mt-1">-1.2% vs last month</p>
        </div>
      </section>

      {/* Pricing Plans Tab */}
      {activeTab === "pricing" && (
        <section className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Pricing Plans</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Billing:</span>
              <button className="px-3 py-1 text-sm rounded-md bg-blue-600 text-white">Monthly</button>
              <button className="px-3 py-1 text-sm rounded-md border border-black/10">Annual (Save 20%)</button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockPricingPlans.map((plan) => (
              <div key={plan.id} className={`relative rounded-lg border p-6 ${plan.popular ? "border-blue-500 bg-blue-50" : "border-black/10 bg-white"}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">${plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-2 px-4 rounded-md text-sm font-medium ${
                  plan.popular 
                    ? "bg-blue-600 text-white hover:bg-blue-700" 
                    : "border border-black/10 hover:bg-gray-50"
                }`}>
                  {plan.popular ? "Get Started" : "Choose Plan"}
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Revenue Tracking Tab */}
      {activeTab === "revenue" && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Revenue Breakdown</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-lg border border-black/10 bg-white p-4">
              <h3 className="text-sm font-semibold text-neutral-800 mb-4">Revenue Sources</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-md bg-gray-50">
                  <div>
                    <p className="text-sm font-medium">Subscriptions</p>
                    <p className="text-xs text-gray-600">Monthly recurring revenue</p>
                  </div>
                  <p className="text-sm font-semibold text-green-600">${mockRevenue[mockRevenue.length - 1].subscriptions.toLocaleString()}</p>
                </div>
                <div className="flex items-center justify-between p-3 rounded-md bg-gray-50">
                  <div>
                    <p className="text-sm font-medium">Commissions</p>
                    <p className="text-xs text-gray-600">Transaction fees</p>
                  </div>
                  <p className="text-sm font-semibold text-blue-600">${mockRevenue[mockRevenue.length - 1].commissions.toLocaleString()}</p>
                </div>
                <div className="flex items-center justify-between p-3 rounded-md bg-gray-50">
                  <div>
                    <p className="text-sm font-medium">Add-ons</p>
                    <p className="text-xs text-gray-600">Premium features</p>
                  </div>
                  <p className="text-sm font-semibold text-purple-600">${mockRevenue[mockRevenue.length - 1].addons.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-black/10 bg-white p-4">
              <h3 className="text-sm font-semibold text-neutral-800 mb-4">Active Subscriptions</h3>
              <div className="space-y-3">
                {mockSubscriptions.filter(s => s.status === "active").map((sub) => (
                  <div key={sub.id} className="flex items-center justify-between p-3 rounded-md bg-gray-50">
                    <div>
                      <p className="text-sm font-medium">{sub.customer}</p>
                      <p className="text-xs text-gray-600">{sub.plan} • Next billing: {new Date(sub.nextBilling).toLocaleDateString()}</p>
                    </div>
                    <p className="text-sm font-semibold text-green-600">${sub.revenue}/mo</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Commissions Tab */}
      {activeTab === "commissions" && (
        <section className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Commission Management</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Total Commissions:</span>
              <span className="text-lg font-bold text-green-600">${totalCommissions.toLocaleString()}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="rounded-lg border border-black/10 bg-white p-4">
              <h3 className="text-sm font-semibold text-neutral-800 mb-4">Commission Summary</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-md bg-green-50 border border-green-200">
                  <div>
                    <p className="text-sm font-medium text-green-800">Paid Commissions</p>
                    <p className="text-xs text-green-600">Completed transactions</p>
                  </div>
                  <p className="text-sm font-semibold text-green-600">
                    ${mockCommissions.filter(c => c.status === "paid").reduce((sum, c) => sum + c.commission, 0).toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center justify-between p-3 rounded-md bg-orange-50 border border-orange-200">
                  <div>
                    <p className="text-sm font-medium text-orange-800">Pending Commissions</p>
                    <p className="text-xs text-orange-600">Awaiting payment</p>
                  </div>
                  <p className="text-sm font-semibold text-orange-600">${pendingCommissions.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-black/10 bg-white p-4">
              <h3 className="text-sm font-semibold text-neutral-800 mb-4">Commission Rates</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-md bg-gray-50">
                  <div>
                    <p className="text-sm font-medium">Standard Rate</p>
                    <p className="text-xs text-gray-600">Most properties</p>
                  </div>
                  <p className="text-sm font-semibold">3.0%</p>
                </div>
                <div className="flex items-center justify-between p-3 rounded-md bg-gray-50">
                  <div>
                    <p className="text-sm font-medium">Premium Rate</p>
                    <p className="text-xs text-gray-600">High-value properties</p>
                  </div>
                  <p className="text-sm font-semibold">3.5%</p>
                </div>
                <div className="flex items-center justify-between p-3 rounded-md bg-gray-50">
                  <div>
                    <p className="text-sm font-medium">Commercial Rate</p>
                    <p className="text-xs text-gray-600">Commercial properties</p>
                  </div>
                  <p className="text-sm font-semibold">2.5%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-black/10 bg-white p-4">
            <h3 className="text-sm font-semibold text-neutral-800 mb-4">Agent Commission Details</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2">Agent</th>
                    <th className="text-left py-2">Properties</th>
                    <th className="text-left py-2">Total Value</th>
                    <th className="text-left py-2">Rate</th>
                    <th className="text-left py-2">Commission</th>
                    <th className="text-left py-2">Status</th>
                    <th className="text-left py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockCommissions.map((commission) => (
                    <tr key={commission.agent} className="border-b border-gray-100">
                      <td className="py-2 font-medium">{commission.agent}</td>
                      <td className="py-2">{commission.properties}</td>
                      <td className="py-2">${commission.totalValue.toLocaleString()}</td>
                      <td className="py-2">{commission.commissionRate}%</td>
                      <td className="py-2 font-semibold">${commission.commission.toLocaleString()}</td>
                      <td className="py-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          commission.status === "paid" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-orange-100 text-orange-800"
                        }`}>
                          {commission.status}
                        </span>
                      </td>
                      <td className="py-2">
                        {commission.status === "pending" && (
                          <button className="text-blue-600 hover:text-blue-800 text-xs">Pay Now</button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
