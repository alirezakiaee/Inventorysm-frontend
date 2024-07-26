'use client';
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";

export default function Tasks() {
  const tasks = useQuery(api.tasks.get);
  return (
    <div>
      {tasks?.map((task, idx) => (
        <div key={task.id}>
          <h2>{task.name}</h2>
          <p key={idx}>{JSON.stringify(task)}</p>
        </div>
      ))}
    </div>
  );
}
