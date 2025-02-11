import LoginForm from "@/components/login/login-form";
import { Button } from "@/components/shadcn/ui/button";
import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex justify-center items-center bg-[radial-gradient(ellipse_at_50%_50%,_hsl(210,_100%,_97%),_hsl(0,_0%,_100%))] h-screen">
   <LoginForm/>
    </div>
  );
}
