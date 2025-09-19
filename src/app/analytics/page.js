"use client";
import { useMemo, useState } from "react";
import { properties } from "../data";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from "recharts";

// Mock analytics data
const mockAnalytics = {
  revenue: [
    { month: "Jan", revenue: 125000, commission: 12500, expenses: 8500 },
    { month: "Feb", revenue: 180000, commission: 18000, expenses: 12000 },
    { month: "Mar", revenue: 220000, commission: 22000, expenses: 15000 },
    { month: "Apr", revenue: 195000, commission: 19500, expenses: 13000 },
    { month: "May", revenue: 280000, commission: 28000, expenses: 18000 },
    { month: "Jun", revenue: 320000, commission: 32000, expenses: 20000 },
  ],
  propertyPerformance: [
    { type: "House", sold: 12, pending: 3, available: 8, avgPrice: 650000 },
    { type: "Apartment", sold: 8, pending: 2, available: 5, avgPrice: 420000 },
    { type: "Commercial", sold: 3, pending: 1, available: 2, avgPrice: 2100000 },
    { type: "Condo", sold: 6, pending: 1, available: 4, avgPrice: 380000 },
  ],
  marketTrends: [
    { period: "Q1 2024", avgPrice: 520000, volume: 45, daysOnMarket: 28 },
    { period: "Q2 2024", avgPrice: 540000, volume: 52, daysOnMarket: 25 },
    { period: "Q3 2024", avgPrice: 560000, volume: 48, daysOnMarket: 22 },
    { period: "Q4 2024", avgPrice: 580000, volume: 55, daysOnMarket: 20 },
  ],
  leadSources: [
    { source: "Website", leads: 45, conversions: 12, revenue: 180000 },
    { source: "Referrals", leads: 32, conversions: 18, revenue: 240000 },
    { source: "Social Media", leads: 28, conversions: 8, revenue: 120000 },
    { source: "Direct", leads: 15, conversions: 10, revenue: 150000 },
  ],
  agentPerformance: [
    { agent: "Sarah Johnson", sales: 8, revenue: 420000, commission: 42000 },
    { agent: "Mike Chen", sales: 6, revenue: 380000, commission: 38000 },
    { agent: "Emily Davis", sales: 5, revenue: 320000, commission: 32000 },
    { agent: "David Wilson", sales: 4, revenue: 280000, commission: 28000 },
  ],
};

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("6m");
  const [selectedMetric, setSelectedMetric] = useState("revenue");

  const totalRevenue = mockAnalytics.revenue.reduce((sum, r) => sum + r.revenue, 0);
  const totalCommission = mockAnalytics.revenue.reduce((sum, r) => sum + r.commission, 0);
  const totalExpenses = mockAnalytics.revenue.reduce((sum, r) => sum + r.expenses, 0);
  const netProfit = totalCommission - totalExpenses;

  const conversionRate = mockAnalytics.leadSources.reduce((sum, s) => sum + s.conversions, 0) / 
                        mockAnalytics.leadSources.reduce((sum, s) => sum + s.leads, 0) * 100;

  return (
    <div className="max-w-[1400px] mx-auto">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <h1 className="text-lg sm:text-xl font-semibold">Analytics Dashboard</h1>
        <div className="flex items-center gap-2">
          <select className="px-3 py-2 text-sm rounded-md border border-black/10" value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
            <option value="3m">Last 3 Months</option>
            <option value="6m">Last 6 Months</option>
            <option value="1y">Last Year</option>
            <option value="all">All Time</option>
          </select>
        </div>
      </header>

      {/* Key Metrics */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="rounded-lg border border-black/10 bg-white p-4">
          <p className="text-xs text-neutral-500">Total Revenue</p>
          <p className="mt-2 text-2xl font-bold text-green-600">
            ${totalRevenue.toLocaleString()}
          </p>
          <p className="text-xs text-green-600 mt-1">+12.5% vs last period</p>
        </div>
        <div className="rounded-lg border border-black/10 bg-white p-4">
          <p className="text-xs text-neutral-500">Net Commission</p>
          <p className="mt-2 text-2xl font-bold text-blue-600">
            ${totalCommission.toLocaleString()}
          </p>
          <p className="text-xs text-blue-600 mt-1">+8.3% vs last period</p>
        </div>
        <div className="rounded-lg border border-black/10 bg-white p-4">
          <p className="text-xs text-neutral-500">Net Profit</p>
          <p className="mt-2 text-2xl font-bold text-purple-600">
            ${netProfit.toLocaleString()}
          </p>
          <p className="text-xs text-purple-600 mt-1">+15.2% vs last period</p>
        </div>
        <div className="rounded-lg border border-black/10 bg-white p-4">
          <p className="text-xs text-neutral-500">Conversion Rate</p>
          <p className="mt-2 text-2xl font-bold text-orange-600">
            {conversionRate.toFixed(1)}%
          </p>
          <p className="text-xs text-orange-600 mt-1">+2.1% vs last period</p>
        </div>
      </section>

      {/* Revenue Trends */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="rounded-lg border border-black/10 bg-white p-4">
          <h3 className="text-sm font-semibold text-neutral-800 mb-4">Revenue Trends</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockAnalytics.revenue}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
                <Area type="monotone" dataKey="revenue" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-lg border border-black/10 bg-white p-4">
          <h3 className="text-sm font-semibold text-neutral-800 mb-4">Commission vs Expenses</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockAnalytics.revenue}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Amount']} />
                <Bar dataKey="commission" fill="#3b82f6" />
                <Bar dataKey="expenses" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Property Performance */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="rounded-lg border border-black/10 bg-white p-4">
          <h3 className="text-sm font-semibold text-neutral-800 mb-4">Property Type Performance</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockAnalytics.propertyPerformance} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="type" type="category" width={80} />
                <Tooltip formatter={(value, name) => [value, name === 'sold' ? 'Sold' : name === 'pending' ? 'Pending' : 'Available']} />
                <Bar dataKey="sold" fill="#10b981" />
                <Bar dataKey="pending" fill="#f59e0b" />
                <Bar dataKey="available" fill="#6b7280" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-lg border border-black/10 bg-white p-4">
          <h3 className="text-sm font-semibold text-neutral-800 mb-4">Market Trends</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockAnalytics.marketTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="period" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip formatter={(value, name) => [
                  name === 'avgPrice' ? `$${value.toLocaleString()}` : value,
                  name === 'avgPrice' ? 'Avg Price' : name === 'volume' ? 'Volume' : 'Days on Market'
                ]} />
                <Line yAxisId="left" type="monotone" dataKey="avgPrice" stroke="#3b82f6" strokeWidth={2} />
                <Line yAxisId="right" type="monotone" dataKey="daysOnMarket" stroke="#ef4444" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Lead Sources & Agent Performance */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="rounded-lg border border-black/10 bg-white p-4">
          <h3 className="text-sm font-semibold text-neutral-800 mb-4">Lead Source Performance</h3>
          <div className="space-y-3">
            {mockAnalytics.leadSources.map((source, index) => (
              <div key={source.source} className="flex items-center justify-between p-3 rounded-md bg-gray-50">
                <div>
                  <p className="text-sm font-medium">{source.source}</p>
                  <p className="text-xs text-gray-600">{source.leads} leads, {source.conversions} conversions</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-green-600">${source.revenue.toLocaleString()}</p>
                  <p className="text-xs text-gray-600">{((source.conversions / source.leads) * 100).toFixed(1)}% conversion</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-black/10 bg-white p-4">
          <h3 className="text-sm font-semibold text-neutral-800 mb-4">Agent Performance</h3>
          <div className="space-y-3">
            {mockAnalytics.agentPerformance.map((agent, index) => (
              <div key={agent.agent} className="flex items-center justify-between p-3 rounded-md bg-gray-50">
                <div>
                  <p className="text-sm font-medium">{agent.agent}</p>
                  <p className="text-xs text-gray-600">{agent.sales} sales</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-blue-600">${agent.revenue.toLocaleString()}</p>
                  <p className="text-xs text-gray-600">${agent.commission.toLocaleString()} commission</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="rounded-lg border border-black/10 bg-white p-4">
        <h3 className="text-sm font-semibold text-neutral-800 mb-4">Market Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-3 rounded-md bg-blue-50 border border-blue-200">
            <p className="text-sm font-medium text-blue-800">Hot Market</p>
            <p className="text-xs text-blue-600 mt-1">Average days on market decreased by 8 days this quarter</p>
          </div>
          <div className="p-3 rounded-md bg-green-50 border border-green-200">
            <p className="text-sm font-medium text-green-800">Price Growth</p>
            <p className="text-xs text-green-600 mt-1">Average property prices up 11.5% year-over-year</p>
          </div>
          <div className="p-3 rounded-md bg-orange-50 border border-orange-200">
            <p className="text-sm font-medium text-orange-800">High Demand</p>
            <p className="text-xs text-orange-600 mt-1">Website traffic increased 23% this month</p>
          </div>
        </div>
      </section>
    </div>
  );
}
