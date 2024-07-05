"use client";

import useRoutes from "@/hooks/useRoutes";
import { useEffect, useState } from "react";
import NavItem from "./nav-item";
import SearchInput from "../search/search-input";
import useMediaQuery from "@/hooks/useMediaQuery";

const Navigation = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isMdSize = useMediaQuery("(max-width: 1054px)");
  const routes = useRoutes();
  const homeRoute = routes[0];
  const otherRoutes = routes.slice(1);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 w-full py-3 px-2 lg:px-6 lg:h-16 h-fit z-50 bg-inherit  shadow-md">
      <div className="flex justify-between items-center w-full">
        {/* Left Section - Home Route */}
        <div className="flex items-center">
          <NavItem route={homeRoute} />
        </div>

        {/* Center Section - Search Input */}
        {!isMdSize && (
          <div className="flex-grow flex justify-center">
            <SearchInput />
          </div>
        )}

        {/* Right Section - Other Routes */}
        <div className="flex items-center  lg:space-x-6 space-x-2">
          {otherRoutes.map((route) => (
            <NavItem key={route.label} route={route} />
          ))}
        </div>
      </div>
      {isMdSize && (
        <div className="mt-4">
          <div className="flex-grow flex justify-center">
            <SearchInput />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
