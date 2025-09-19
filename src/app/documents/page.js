"use client";
import { useMemo, useState } from "react";
import { properties } from "../data";

const mockDocs = [
  { id: "d1", fileName: "OceanView_Flyer.pdf", size: 352_000, type: "application/pdf", propertyId: "p1", tags: ["marketing"], createdAt: "2025-02-10" },
  { id: "d2", fileName: "Condo_FloorPlan.png", size: 820_000, type: "image/png", propertyId: "p7", tags: ["floorplan"], createdAt: "2025-02-12" },
  { id: "d3", fileName: "BusinessPark_Inspection.docx", size: 1440_000, type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", propertyId: "p4", tags: ["inspection","internal"], createdAt: "2025-02-13" },
];

function formatBytes(bytes) {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

export default function DocumentsPage() {
  const [query, setQuery] = useState("");
  const [propertyFilter, setPropertyFilter] = useState("all");
  const [tagFilter, setTagFilter] = useState("all");

  const allTags = useMemo(() => Array.from(new Set(mockDocs.flatMap(d => d.tags))).sort(), []);

  const filtered = useMemo(() => {
    return mockDocs.filter(d => {
      const q = query.toLowerCase();
      const matchesQ = q === "" || d.fileName.toLowerCase().includes(q);
      const matchesProperty = propertyFilter === "all" || d.propertyId === propertyFilter;
      const matchesTag = tagFilter === "all" || d.tags.includes(tagFilter);
      return matchesQ && matchesProperty && matchesTag;
    });
  }, [query, propertyFilter, tagFilter]);

  return (
    <div className="max-w-[1200px] mx-auto">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <h1 className="text-lg sm:text-xl font-semibold">Document Management</h1>
        <div className="flex flex-wrap items-center gap-2">
          <input className="px-3 py-2 text-sm rounded-md border border-black/10 w-56" placeholder="Search documents…" value={query} onChange={(e) => setQuery(e.target.value)} />
          <select className="px-2 py-2 text-sm rounded-md border border-black/10" value={propertyFilter} onChange={(e) => setPropertyFilter(e.target.value)}>
            <option value="all">All Properties</option>
            {properties.map(p => (
              <option key={p.id} value={p.id}>{p.title.slice(0, 28)}{p.title.length > 28 ? "…" : ""}</option>
            ))}
          </select>
          <select className="px-2 py-2 text-sm rounded-md border border-black/10" value={tagFilter} onChange={(e) => setTagFilter(e.target.value)}>
            <option value="all">All Tags</option>
            {allTags.map(t => (<option key={t} value={t}>{t}</option>))}
          </select>
          <button className="ml-auto px-3 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700">Upload</button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filtered.map(d => (
          <div key={d.id} className="rounded-lg border border-black/10 bg-white p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium truncate max-w-[70%]" title={d.fileName}>{d.fileName}</div>
              <div className="text-xs text-neutral-500">{formatBytes(d.size)}</div>
            </div>
            <div className="mt-2 text-xs text-neutral-600">{new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(d.createdAt))}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {d.tags.map(t => (
                <span key={t} className="text-[11px] px-2 py-1 rounded border border-black/10 bg-black/[.03]">#{t}</span>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2">
              <button className="px-2 py-1 text-xs rounded border border-black/10">Preview</button>
              <button className="px-2 py-1 text-xs rounded border border-black/10">Download</button>
              <button className="ml-auto px-2 py-1 text-xs rounded border border-black/10">Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


