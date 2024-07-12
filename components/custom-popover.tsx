"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  Trigger: React.ReactNode;
  children: React.ReactNode;
};

const CustomPopover = ({ Trigger, children }: Props) => {
  // popover display
  const [open, setOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={popoverRef}>
      {/* trigger */}
      <div onClick={() => setOpen(!open)} className="relative cursor-pointer  ">
        {Trigger}
      </div>

      {/* content */}
      {open && (
        <div className="z-50  absolute w-full rounded-md border bg-popover  text-popover-foreground shadow-md outline-none ">
          {children}
        </div>
      )}
    </div>
  );
};

export default CustomPopover;
