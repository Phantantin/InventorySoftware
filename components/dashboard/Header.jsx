"use client";
import {
  AlignCenter,
  AlignJustify,
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
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { generateInitials } from "@/lib/generateInitial";
import Login from "@/app/login/page";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header({ setShowSidebar }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return <p>Loading User...</p>;
  }
  if (status === "unauthenticated") {
    return <Login />;
    // router.push("/login")
  }
  const username = session?.user?.name.split(" ")[0] ?? "";
  const initials = generateInitials(session?.user?.name);
  function handleClick() {
    console.log("Btn clicked");
  }
  return (
    <div className="bg-gray-50 h-12 flex items-center justify-between px-6 border-b border-slate-200">
      <button className="lg:hidden" onClick={() => setShowSidebar(true)}>
        <AlignJustify className="w-6 h-6" />
      </button>
      {/* Left side */}
      <div className="flex gap-3">
        <button className="hidden lg:block">
          <History className="w-5 h-5" />
        </button>
        <SearchInput />
      </div>

      {/* Right side */}
      <div className="items-center gap-3 hidden lg:flex">
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center hover:bg-slate-200 rounded px-2 py-1">
                <span className="text-sm font-medium">{username}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <button onClick={()=>signOut()}>Logout</button>
              </DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <button>
            {session.user?.image ? (
              <Image
                src={session.user?.image}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border border-slate-300"
                alt="user avatar"
              />
            ) : (
              <div className="w-8 h-8 rounded-full border border-slate-800 bg-white">
                {initials}
              </div>
            )}

            {/* <Image
              src="/users.png"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full border border-slate-300"
              alt="user avatar"
            /> */}
          </button>
          <button className="p-1.5 rounded-lg hover:bg-slate-200">
            <LayoutGrid className="w-5 h-5 text-slate-900" />
          </button>

          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>
      </div>

      <button className="sm:hidden">
        <Image
          src="/users.png"
          width={32}
          height={32}
          className="w-8 h-8 rounded-full border border-slate-300"
          alt="user avatar"
        />
      </button>
    </div>
  );
}
