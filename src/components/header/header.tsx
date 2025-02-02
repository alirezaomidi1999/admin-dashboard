"use client";
import React, { useState } from "react";
import { Input } from "@/components/shadcn/ui/input";
import { SidebarTrigger } from "@/components/shadcn/ui/sidebar";
import { BellRing, Search, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import { Button } from "@/components/shadcn/ui/button";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  const [language, setLanguage] = useState("English");
  return (
    <div className="flex items-center shadow-sm py-4 px-8 justify-between bg-white">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <div className="hidden w-[400px] xl:flex items-center border border-[#dddd] rounded-full px-2">
          <Search className="text-[#000000] " />
          <Input
            type="search"
            className="outline-none border-none focus-visible:ring-0 shadow-none"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden xl:flex xl:items-center xl:gap-3">
          <BellRing className="text-sidebar-accent" fill="#477eff" />
          <DropdownMenu>
            <DropdownMenuTrigger className="flex w-40 items-center px-4 py-2 text-sm font-medium bg-white  rounded-md  hover:bg-gray-100 focus:outline-none">
              <div className="flex items-center gap-3">
                <Image
                  src={`/images/${
                    language === "English" ? "Uk-Flag" : "Iran-Flag"
                  }.png`}
                  alt="Select-Language"
                  width={40}
                  height={25}
                />
                {language}
                <ChevronDown className="size-4" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() =>
                  setLanguage((prevLanguage) =>
                    prevLanguage === "English" ? "فارسی" : "English"
                  )
                }
              >
                {language === "English" ? "فارسی" : "English"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex gap-2 items-center">
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage
              className="rounded-full"
              src={"/images/Avatar.jpg"}
              alt={"alireza"}
            />
            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-[14px] text-[#404040] font-bold">
              Alireza Omidi
            </p>
            <p className="text-[12px] text-[#565656] font-semibold">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
