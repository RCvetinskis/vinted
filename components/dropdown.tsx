"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
type Props = {
  trigger: React.ReactNode | string;
  children: React.ReactNode;
};

const Dropdown = ({ children, trigger }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-10 h-10 px-1.5 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground">
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent>{children}</DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
