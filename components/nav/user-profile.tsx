// "use client";
// import Image from "next/image";
// import React from "react";
// import { useSession } from "next-auth/react";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuPortal,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuSub,
//   DropdownMenuSubContent,
//   DropdownMenuSubTrigger,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// export default function UserProfile() {
//   const session = useSession();
//   const imageUrl = session.data?.user?.image!;
//   const name = session.data?.user?.name!;
//   const email = session.data?.user?.email!;

//   return (
//     // <div className="flex items-center justify-start gap-1 lg:gap-2 m-0 p-0 lg:px-3 lg:w-full">
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <div className="flex items-center justify-start gap-1 lg:gap-2 m-0 p-0 lg:w-full">
//           <Button variant="ghostt">
//             {imageUrl && (
//               <Image
//                 src={imageUrl}
//                 className="rounded-full ml-0 mr-2"
//                 alt={`${name} profile picture`}
//                 width={50}
//                 height={50}
//               />
//             )}
//             <div className="flex flex-col items-start justify-center">
//               <span className="text-sm font-semibold text-gray-800">
//                 {name}
//               </span>
//               <span className="text-xs text-gray-500">{email}</span>
//             </div>
//           </Button>
//         </div>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-56">
//         <DropdownMenuLabel>My Account</DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         <DropdownMenuGroup>
//           <DropdownMenuItem className="lg:w-full px-28 justify-evenly">
//             Profile
//             <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
//           </DropdownMenuItem>
//         </DropdownMenuGroup>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
"use client";
import Image from "next/image";
import React from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function UserProfile() {
  const session = useSession();
  const imageUrl = session.data?.user?.image!;
  const name = session.data?.user?.name!;
  const email = session.data?.user?.email!;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center justify-start gap-1 lg:gap-2 m-0 p-0 lg:w-full">
          <Button variant="ghostt">
            {imageUrl && (
              <Image
                src={imageUrl}
                className="rounded-full ml-0 mr-2"
                alt={`${name} profile picture`}
                width={50}
                height={50}
              />
            )}
            <div className="flex flex-col items-start justify-center">
              <span className="text-sm font-semibold text-gray-800">
                {name}
              </span>
              <span className="text-xs text-gray-500">{email}</span>
            </div>
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 origin-top-right">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="lg:w-full text-left px-4 py-2">
            Logout
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
