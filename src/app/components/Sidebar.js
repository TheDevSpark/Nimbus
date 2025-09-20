"use client";
import { IconHome } from "./Icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

const nav = [
  { label: "Property Management", href: "/" },
  { label: "Client & Lead Management", href: "/lead-management" },
  { label: "Scheduling & Calendar", href: "/scheduling" },
  { label: "Document Management", href: "/documents" },
  { label: "Analytics Dashboard", href: "/analytics" },
  { label: "Monetization", href: "/monetization" },
];

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-[220px] border-r border-black/10 flex-col p-3 gap-2 bg-white">
        <nav className="mt-1 flex-1">
          {nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-2 px-2 py-2 rounded-md text-sm hover:bg-black/[.04] ${isActive ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-700"
                  }`}
              >
                <IconHome className="text-black/60" />
                <span className="truncate">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={onClose}
          ></div>

          {/* Sidebar Panel */}
          <aside className="absolute left-0 top-0 h-full w-64 bg-white shadow-lg p-4">
            <button
              className="mb-4 text-gray-600 hover:text-black"
              onClick={onClose}
            >
              Close ✕
            </button>
            <nav className="flex flex-col gap-2">
              {nav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm hover:bg-black/[.04] ${isActive
                        ? "bg-blue-100 text-blue-700 font-medium"
                        : "text-gray-700"
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}








