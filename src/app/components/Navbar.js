"use client";
import { useState } from "react";
const LogoIcon = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"> <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /> </svg>);
export default function Navbar() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200 px-4 sm:px-6 py-3 relative z-50">
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">
          <LogoIcon className="w-6 h-6 text-blue-600" />

        </div>

        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 border-2 border-gray-300 hover:border-blue-400 transition-colors"
          >
            <img
              src="/profile-img.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </button>


        </div>
      </div>
    </nav>
  );
}
