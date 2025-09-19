"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconHome } from "./Icons";

const nav = [
  { label: "Dashboard", href: "/" },
  { label: "Property Management", href: "/property-list" },
  { label: "Client & Lead Management", href: "#" },
  { label: "Scheduling & Calendar", href: "/calendar" },
  { label: "Document Management", href: "/documents" },
  { label: "Analytics Dashboard", href: "/analytics" },
  { label: "Monetization", href: "/monetization" },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden md:flex fixed top-0 left-0 h-dvh w-[220px] border-r border-black/10 flex-col p-3 gap-2 bg-white z-20">
      <div className="flex items-center gap-2 px-2 py-2">
        <div className="h-5 w-5 rounded-sm bg-blue-600"/>
        <span className="text-sm font-semibold text-neutral-800">Nimbus</span>
      </div>
      <nav className="mt-1 flex-1">
        {nav.map((item) => {
          const isActive = item.href !== "#" && (pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)));
          return (
          <Link key={item.label} href={item.href} className={`flex items-center gap-2 px-2 py-2 rounded-md text-sm hover:bg-black/[.04] ${isActive ? "bg-black/[.06] font-medium" : ""}`}>
            <IconHome className="text-black/60" />
            <span className="truncate">{item.label}</span>
          </Link>
          );
        })}
      </nav>
    </aside>
  );
}


