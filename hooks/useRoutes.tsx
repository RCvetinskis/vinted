"use client";

import NavNotification from "@/components/navigation/nav-notification";
import { ModeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import UploadButton from "@/components/upload/upload-button";
import UserBtn from "@/components/user/user-btn";
import { Route } from "@/types";
import { useUser } from "@clerk/nextjs";
import { Heart, LogIn, Mail } from "lucide-react";
import Image from "next/image";

import { usePathname } from "next/navigation";
import useMediaQuery from "./useMediaQuery";

const useRoutes = () => {
  const pathname = usePathname();
  const { isSignedIn, isLoaded } = useUser();
  const isXs = useMediaQuery("(max-width: 400px)");

  const authRoute = isSignedIn
    ? {
        href: null,
        label: null,
        active: null,
        Component: UserBtn,
      }
    : !isSignedIn && !isLoaded
    ? {
        href: null,
        label: null,
        active: null,
        Component: () => <Skeleton className=" rounded-full w-6 h-6" />,
      }
    : {
        href: "/sign-in",
        label: "Sign In",
        active: pathname === "/sign-in",
        Component: () => (
          <Button variant={"outline"} size={"icon"}>
            <LogIn />
          </Button>
        ),
      };
  const routes: Route[] = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
      Component: () => (
        <Button variant={"ghost"} size={isXs ? "icon" : "default"}>
          <Image
            className="h-7 w-auto "
            src={!isXs ? "/vinted.png" : "/V_vinted.svg"}
            width={84}
            height={84}
            alt="Logo"
          />
        </Button>
      ),
    },
    {
      href: "/inbox",
      label: "inbox",
      active: pathname === "/inbox",
      Component: () => (
        <Button size={"icon"} variant={"outline"}>
          <Mail />
        </Button>
      ),
    },
    {
      href: "/favorites",
      label: "Favorites",
      active: pathname === "/favorites",
      Component: () => (
        <Button size={"icon"} variant={"outline"}>
          <Heart />
        </Button>
      ),
    },
    {
      href: null,
      label: "Notifications",
      active: null,
      Component: NavNotification,
    },
    authRoute,
    {
      href: null,
      label: "Theme",
      active: null,
      Component: ModeToggle,
    },
    {
      href: "/items/upload",
      label: "Upload Item",
      active: pathname === "/upload",
      Component: UploadButton,
    },
  ];

  return routes;
};

export default useRoutes;
