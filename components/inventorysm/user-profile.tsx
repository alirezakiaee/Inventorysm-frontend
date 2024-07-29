"use client";
import Image from "next/image";
import React from "react";
import { useSession } from "next-auth/react";

export default function UserProfile() {
  const session = useSession();
  return (
    <div>
      <Image
        src={session.data?.user?.image!}
        className="rounded-full"
        alt="user-profile"
        width={100}
        height={100}
      />
    </div>
  );
}
