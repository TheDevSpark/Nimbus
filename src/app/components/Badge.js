export default function Badge({ color = "slate", children, className = "" }) {
  const colorMap = {
    slate: "bg-slate-100 text-slate-700 dark:bg-slate-900/40 dark:text-slate-300",
    blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    green: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    yellow: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
    red: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  };
  const cls = `inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${colorMap[color] ?? colorMap.slate} ${className}`;
  return <span className={cls}>{children}</span>;
}


