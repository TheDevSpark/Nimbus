import { IconHome } from "./Icons";

const nav = [
  "Property Management",
  "Client & Lead Management",
  "Scheduling & Calendar",
  "Document Management",
  "Analytics Dashboard",
  "Monetization",
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-[220px] border-r border-black/10 flex-col p-3 gap-2 bg-white">
      <div className="flex items-center gap-2 px-2 py-2">
        <div className="h-5 w-5 rounded-sm bg-blue-600"/>
        <span className="text-sm font-semibold text-neutral-800">Nimbus</span>
      </div>
      <nav className="mt-1 flex-1">
        {nav.map((label, idx) => (
          <a key={label} href="#" className={`flex items-center gap-2 px-2 py-2 rounded-md text-sm hover:bg-black/[.04] ${idx === 0 ? "bg-black/[.04] font-medium" : ""}`}>
            <IconHome className="text-black/60" />
            <span className="truncate">{label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}


