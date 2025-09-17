"use client";
import { useMemo, useState } from "react";
import FilterBar from "./components/FilterBar";
import PropertyCard from "./components/PropertyCard";
import { properties as seed, propertyTypes, statusOptions } from "./data";
import HeaderBar from "./components/HeaderBar";

export default function Home() {
  const [filters, setFilters] = useState({ status: "", type: "" });
  const [sort, setSort] = useState("newest");

  const items = useMemo(() => {
    let list = [...seed];
    if (filters.status) list = list.filter((p) => p.status === filters.status);
    if (filters.type) list = list.filter((p) => p.type === filters.type);
    if (sort === "newest") list.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
    if (sort === "price_desc") list.sort((a, b) => b.price - a.price);
    if (sort === "price_asc") list.sort((a, b) => a.price - b.price);
    return list;
  }, [filters, sort]);

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-[1200px]">
        <HeaderBar />
        <div className="mb-4">
          <FilterBar
            statusOptions={statusOptions}
            propertyTypes={propertyTypes}
            active={filters}
            onChange={setFilters}
            sort={sort}
            onSortChange={setSort}
          />
        </div>
        {items.length === 0 ? (
          <div className="text-center text-sm text-black/60 dark:text-white/60 py-24">No properties found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-4">
            {items.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
