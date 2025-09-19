export default function Badge({ color = "slate", children, className = "" }) {
  const colorMap = {
    slate: "bg-slate-50 text-slate-700 border border-slate-200",
    blue: "bg-blue-50 text-blue-700 border border-blue-200",
    emerald: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    amber: "bg-amber-50 text-amber-800 border border-amber-200",
    rose: "bg-rose-50 text-rose-700 border border-rose-200",
  };
  const cls = `inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium ${colorMap[color] ?? colorMap.slate} ${className}`;
  return <span className={cls}>{children}</span>;
}


