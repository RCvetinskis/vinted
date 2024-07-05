"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useClerk, useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
import UserAvatar from "./user-avatar";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {};

const UserBtn = (props: Props) => {
  const { isLoaded, user } = useUser();
  const { signOut, openUserProfile } = useClerk();
  const router = useRouter();
  if (!isLoaded) {
    return null;
  }

  if (!user) return null;
  if (!user?.id) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <UserAvatar image={user.imageUrl} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="capitalize text-center">
          {user.username}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Button variant={"ghost"} size={"sm"} className="w-full">
            <Link href={`/profile/${user.username}`}>Profile</Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:cursor-pointer" asChild>
          <Button
            variant={"ghost"}
            size={"sm"}
            className="w-full"
            onClick={() => openUserProfile()}
          >
            Settings
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Button variant={"ghost"} size={"sm"} className="w-full">
            <Link href={`/my_orders/sold`}>My Orders</Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:cursor-pointer" asChild>
          <Button
            variant={"ghost"}
            size={"sm"}
            className="w-full"
            onClick={() => signOut(() => router.push("/"))}
          >
            Sign Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserBtn;
