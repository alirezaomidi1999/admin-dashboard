import type { Metadata } from "next";
import { SidebarProvider } from "@/components/shadcn/ui/sidebar";
import { AppSidebar } from "@/components/shadcn/app-sidebar";
import Header from "@/components/header/header";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div className="flex w-full">
        <AppSidebar />
        <div className="flex flex-col grow">
          <header>
            <Header />
          </header>
          <main className="bg-background min-h-[calc(100vh-75px)] px-8 py-8">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
