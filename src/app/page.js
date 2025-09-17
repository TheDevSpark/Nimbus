"use client";
import { properties } from "./data";
import PropertyCard from "./components/PropertyCard";
import { PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line } from "recharts";

export default function DashboardPage() {
  const total = properties.length;
  const available = properties.filter((p) => p.status === "Available").length;
  const pending = properties.filter((p) => p.status === "Pending").length;
  const sold = properties.filter((p) => p.status === "Sold").length;
  const averagePrice = Math.round(properties.reduce((sum, p) => sum + p.price, 0) / (properties.length || 1));

  const recent = [...properties]
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
    .slice(0, 4);

  // Chart data
  const statusData = [
    { name: "Available", value: available, color: "#10b981" },
    { name: "Pending", value: pending, color: "#f59e0b" },
    { name: "Sold", value: sold, color: "#ef4444" },
  ];


  const priceData = properties
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    .map((property, index) => ({
      name: `Property ${index + 1}`,
      price: property.price / 1000, // Convert to thousands for better readability
      date: property.createdAt,
    }));

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-[1200px]">
        <header className="flex items-center justify-between py-3">
          <h1 className="text-lg sm:text-xl font-semibold">Dashboard</h1>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          <div className="rounded-lg border border-black/10 bg-white p-4">
            <p className="text-xs text-neutral-500">Total Properties</p>
            <p className="mt-2 text-2xl font-bold text-neutral-900">{total}</p>
          </div>
          <div className="rounded-lg border border-black/10 bg-white p-4">
            <p className="text-xs text-neutral-500">Available</p>
            <p className="mt-2 text-2xl font-bold text-emerald-600">{available}</p>
          </div>
          <div className="rounded-lg border border-black/10 bg-white p-4">
            <p className="text-xs text-neutral-500">Pending</p>
            <p className="mt-2 text-2xl font-bold text-amber-600">{pending}</p>
          </div>
          <div className="rounded-lg border border-black/10 bg-white p-4">
            <p className="text-xs text-neutral-500">Sold</p>
            <p className="mt-2 text-2xl font-bold text-rose-600">{sold}</p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
          {/* Property Status Pie Chart */}
          <div className="rounded-lg border border-black/10 bg-white p-4">
            <h3 className="text-sm font-semibold text-neutral-800 mb-4">Property Status Distribution</h3>
            <div className="h-48 sm:h-56 lg:h-60">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value} properties`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              {statusData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-xs text-neutral-600">{item.name}: {item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price Trend Line Chart */}
          <div className="rounded-lg border border-black/10 bg-white p-4">
            <h3 className="text-sm font-semibold text-neutral-800 mb-4">Price Trends (in thousands)</h3>
            <div className="h-48 sm:h-56 lg:h-60">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={priceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${value}k`, 'Price']} />
                  <Line type="monotone" dataKey="price" stroke="#3b82f6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="rounded-lg border border-black/10 bg-white p-4">
            <h3 className="text-sm font-semibold text-neutral-800 mb-4">Key Metrics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-600">Average Price</span>
                <span className="text-lg font-bold text-blue-600">
                  {averagePrice.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-600">Total Value</span>
                <span className="text-lg font-bold text-green-600">
                  {(properties.reduce((sum, p) => sum + p.price, 0)).toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-600">Conversion Rate</span>
                <span className="text-lg font-bold text-purple-600">
                  {((sold / total) * 100).toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-600">Avg. Views</span>
                <span className="text-lg font-bold text-orange-600">
                  {Math.round(properties.reduce((sum, p) => sum + p.views, 0) / total)}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-neutral-800">Recent Properties</h2>
          </div>
          {recent.length === 0 ? (
            <div className="text-center text-sm text-black/60 dark:text-white/60 py-12">No recent properties.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-4">
              {recent.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
