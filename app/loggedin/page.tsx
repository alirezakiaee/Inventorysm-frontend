import { Button } from "@/components/ui/button";
import Tasks from "@/components/inventorysm/tasks";
import UserProfile from "@/components/inventorysm/user-profile";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Dashboard</h1>
      <UserProfile />
      <Tasks />
    </main>
  );
}
