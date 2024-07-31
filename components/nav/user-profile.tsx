"use client";
import Image from "next/image";
import React from "react";
import { useSession } from "next-auth/react";

export default function UserProfile() {
  const session = useSession();
  const imageUrl = session.data?.user?.image!;
  const name = session.data?.user?.name!;
  const email = session.data?.user?.email!;
  return (
    <div className="flex items-center justify-start gap-1 lg:gap-2 m-0 p-0 lg:px-3 lg:w-full bg-white">
      {imageUrl && (
      <Image
        src={imageUrl}
        className="rounded-full"
        alt={`${name} profile picture`}
        width={100}
        height={100}
      />
      )}
      <p className="truncate">{email}</p>
    </div>
  );
}
