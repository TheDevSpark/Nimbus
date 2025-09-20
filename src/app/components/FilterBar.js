import Badge from "../components/Badge";

export default function FilterBar({
  statusOptions,
  propertyTypes,
  active,
  onChange,
  sort,
  onSortChange,
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      <div className="flex items-center gap-2">
        <label className="text-xs font-medium">Status</label>
        <select
          className="h-8 rounded-full border border-black/10 bg-white px-3 text-sm"
          value={active.status}
          onChange={(e) => onChange({ ...active, status: e.target.value })}
        >
          <option value="">All</option>
          {statusOptions.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-2">
        <label className="text-xs font-medium">Property Type</label>
        <select
          className="h-8 rounded-full border border-black/10 bg-white px-3 text-sm"
          value={active.type}
          onChange={(e) => onChange({ ...active, type: e.target.value })}
        >
          <option value="">All</option>
          {propertyTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-2">
        <label className="text-xs font-medium">Sort By</label>
        <select
          className="h-8 rounded-full border border-black/10 bg-white px-3 text-sm"
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="newest">Date Added (Newest)</option>
          <option value="price_desc">Price (High → Low)</option>
          <option value="price_asc">Price (Low → High)</option>
        </select>
      </div>
      <div className="ml-auto" />
    </div>
  );
}


