import {
  Bell,
  ChevronDown,
  History,
  LayoutGrid,
  Plus,
  Settings,
  User,
} from "lucide-react";
import React from "react";
import SearchInput from "./SearchInput";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  return (
    <div className="bg-gray-50 h-12 flex items-center justify-between px-6 border-b border-slate-200">
      {/* Left side */}
      <div className="flex gap-3 items-center">
        <button className="p-1 rounded-lg hover:bg-slate-200">
          <History className="w-5 h-5" />
        </button>
        <SearchInput />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Add new button */}
        <div className="pr-2 border-r border-gray-300">
          <button className="p-1.5 rounded-lg bg-blue-600 hover:bg-blue-700">
            <Plus className="text-white w-4 h-4" />
          </button>
        </div>

        {/* Icons group */}
        <div className="flex border-r border-gray-300 space-x-2 pr-2">
          <button className="p-1.5 rounded-lg hover:bg-slate-200">
            <User className="text-slate-900 w-4 h-4" />
          </button>
          <button className="p-1.5 rounded-lg hover:bg-slate-200">
            <Bell className="text-slate-900 w-4 h-4" />
          </button>
          <button className="p-1.5 rounded-lg hover:bg-slate-200">
            <Settings className="text-slate-900 w-4 h-4" />
          </button>
        </div>

        {/* Profile group */}
        <div className="flex items-center gap-3">
          <button className="flex items-center hover:bg-slate-200 rounded px-2 py-1">
            <span className="text-sm font-medium">TN</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          <Image
            src="/users.png"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full border border-slate-300"
            alt="user avatar"
          />

          <button className="p-1.5 rounded-lg hover:bg-slate-200">
            <LayoutGrid className="w-5 h-5 text-slate-900" />
          </button>

          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
