export default function Button({ variant = "default", size = "md", className = "", children, leadingIcon: LeadingIcon, ...props }) {
  const base = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600",
    outline: "border border-black/10 dark:border-white/20 hover:bg-black/[.03] dark:hover:bg-white/[.06]",
    ghost: "hover:bg-black/[.03] dark:hover:bg-white/[.06]",
    destructive: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600",
    success: "bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:ring-emerald-600",
  };
  const sizes = {
    xs: "h-8 px-2 text-xs",
    sm: "h-8 px-3 text-sm",
    md: "h-9 px-4 text-sm",
    lg: "h-10 px-5 text-base",
  };
  const cls = `${base} ${variants[variant] ?? variants.default} ${sizes[size] ?? sizes.md} ${className}`;
  return (
    <button className={cls} {...props}>
      {LeadingIcon ? <LeadingIcon className="mr-1" /> : null}
      {children}
    </button>
  );
}


