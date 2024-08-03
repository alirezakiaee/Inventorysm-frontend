import SideBar from "@/components/nav/side-bar";
import MobileNav from "@/components/nav/mobile-nav";

export default function Home() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SideBar />
      <MobileNav title="Dashboard" />
    </div>
  );
}
