import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Inventorysm</h1>
      <Button>Get Started</Button>
    </main>
  );
}
