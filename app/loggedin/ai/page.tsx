import MobileNav from "@/components/nav/mobile-nav";
import SideBar from "@/components/nav/side-bar";
import React from "react";
import CompanyList from "@/components/companies/company-list";

export default function Ai() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SideBar />
      <div className="flex flex-col">
        <MobileNav title="AI Analytics" />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:px-8">
          
        </main>
      </div>
    </div>
  );
}
