"use client";
import { useMemo, useState } from "react";
import { properties } from "../data";

const mockEvents = [
  { id: "e1", title: "Show House - Ocean View", startAt: "2025-02-15T10:00:00", endAt: "2025-02-15T11:00:00", propertyId: "p1", type: "Showing" },
  { id: "e2", title: "Client Meeting - Downtown Condo", startAt: "2025-02-16T14:00:00", endAt: "2025-02-16T15:00:00", propertyId: "p7", type: "Meeting" },
  { id: "e3", title: "Inspection - Business Park", startAt: "2025-02-18T09:00:00", endAt: "2025-02-18T10:30:00", propertyId: "p4", type: "Inspection" },
];

function formatDateKey(date) {
  return date.toISOString().slice(0, 10);
}

function getMonthDays(year, month) {
  const firstDay = new Date(Date.UTC(year, month, 1));
  const startDay = new Date(firstDay);
  startDay.setUTCDate(firstDay.getUTCDate() - ((firstDay.getUTCDay() + 6) % 7));
  const days = [];
  for (let i = 0; i < 42; i++) {
    const d = new Date(startDay);
    d.setUTCDate(startDay.getUTCDate() + i);
    days.push(d);
  }
  return days;
}

export default function CalendarPage() {
  const today = new Date();
  const [cursor, setCursor] = useState(new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 1)));
  const [propertyFilter, setPropertyFilter] = useState("all");

  const days = useMemo(() => getMonthDays(cursor.getUTCFullYear(), cursor.getUTCMonth()), [cursor]);

  const eventsByDay = useMemo(() => {
    const filtered = propertyFilter === "all" ? mockEvents : mockEvents.filter(e => e.propertyId === propertyFilter);
    const map = new Map();
    for (const e of filtered) {
      const key = formatDateKey(new Date(e.startAt));
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(e);
    }
    return map;
  }, [propertyFilter]);

  const monthLabel = new Intl.DateTimeFormat("en", { month: "long", year: "numeric", timeZone: "UTC" }).format(cursor);

  return (
    <div className="max-w-[1200px] mx-auto">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <h1 className="text-lg sm:text-xl font-semibold">Scheduling & Calendar</h1>
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 text-sm rounded-md border border-black/10" onClick={() => setCursor(new Date(Date.UTC(cursor.getUTCFullYear(), cursor.getUTCMonth() - 1, 1)))}>
            Prev
          </button>
          <div className="min-w-[180px] text-center text-sm font-medium">{monthLabel}</div>
          <button className="px-3 py-2 text-sm rounded-md border border-black/10" onClick={() => setCursor(new Date(Date.UTC(cursor.getUTCFullYear(), cursor.getUTCMonth() + 1, 1)))}>
            Next
          </button>
          <select className="ml-2 px-2 py-2 text-sm rounded-md border border-black/10" value={propertyFilter} onChange={(e) => setPropertyFilter(e.target.value)}>
            <option value="all">All Properties</option>
            {properties.map(p => (
              <option key={p.id} value={p.id}>{p.title.slice(0, 28)}{p.title.length > 28 ? "…" : ""}</option>
            ))}
          </select>
        </div>
      </header>

      <div className="grid grid-cols-7 gap-2">
        {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => (
          <div key={d} className="text-xs text-neutral-500 px-1">{d}</div>
        ))}
        {days.map((d, idx) => {
          const isCurrentMonth = d.getUTCMonth() === cursor.getUTCMonth();
          const key = formatDateKey(d);
          const evts = eventsByDay.get(key) || [];
          return (
            <div key={idx} className={`min-h-24 rounded-md border border-black/10 p-2 ${isCurrentMonth ? "bg-white" : "bg-black/[.02]"}`}>
              <div className="text-xs text-neutral-500">{d.getUTCDate()}</div>
              <div className="mt-1 space-y-1">
                {evts.slice(0, 3).map(e => (
                  <div key={e.id} className="text-xs px-2 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200 truncate">
                    {e.title}
                  </div>
                ))}
                {evts.length > 3 && (
                  <div className="text-[11px] text-neutral-600">+{evts.length - 3} more</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


