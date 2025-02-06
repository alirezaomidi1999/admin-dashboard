"use client";
import { Home, ShoppingBasket, Users, TicketsPlane } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/shadcn/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Menu items.
const items = [
  {
    title: "Overview",
    url: "/",
    icon: Home,
  },
  {
    title: "Products Management",
    url: "/products-management",
    icon: ShoppingBasket,
  },
  {
    title: "Users Management",
    url: "/users-management",
    icon: Users,
  },
  {
    title: "Reports",
    url: "/reports-management",
    icon: TicketsPlane,
  },
];
export function AppSidebar() {
  console.log("ok");
  const pathName = usePathname();
  console.log(pathName);
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex items-center pt-6">
        <Image src={"/images/Logo.png"} width={120} height={40} alt="Logo" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className={`${
                      pathName === item.url
                        ? "bg-sidebar-accent text-sidebar-accent-foreground py-6 px-4"
                        : ""
                    }`}
                    asChild
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
