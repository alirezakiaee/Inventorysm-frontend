import MobileNav from "@/components/nav/mobile-nav";
import SideBar from "@/components/nav/side-bar";
import React from "react";
import UserSettings from "@/components/settings/settingsPage";


export default function SettingsPage() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SideBar />
      <div className="flex flex-col">
        <MobileNav title="Settings" />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:px-8">
          <UserSettings />
        </main>
      </div>
    </div>
  );
}
