import Link from "next/link";
import { IconHome } from "./Icons";

const nav = [
  { label: "Dashboard", href: "/" },
  { label: "Property Management", href: "/property-list" },
  { label: "Client & Lead Management", href: "#" },
  { label: "Scheduling & Calendar", href: "#" },
  { label: "Document Management", href: "#" },
  { label: "Analytics Dashboard", href: "#" },
  { label: "Monetization", href: "#" },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex fixed top-0 left-0 h-dvh w-[220px] border-r border-black/10 flex-col p-3 gap-2 bg-white z-20">
      <div className="flex items-center gap-2 px-2 py-2">
        <div className="h-5 w-5 rounded-sm bg-blue-600"/>
        <span className="text-sm font-semibold text-neutral-800">Nimbus</span>
      </div>
      <nav className="mt-1 flex-1">
        {nav.map((item, idx) => (
          <Link key={item.label} href={item.href} className={`flex items-center gap-2 px-2 py-2 rounded-md text-sm hover:bg-black/[.04] ${idx === 0 ? "bg-black/[.04] font-medium" : ""}`}>
            <IconHome className="text-black/60" />
            <span className="truncate">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}


