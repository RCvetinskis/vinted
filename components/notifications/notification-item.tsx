import { Notification } from "@/types";
import {
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { Bell } from "lucide-react";

type Props = {
  notifications?: Notification[] | [];
};

const NotificationItem = ({ notifications }: Props) => {
  return (
    <div className="p-3 w-[200px] max-w-[250px] ">
      <header className="grid justify-center">
        <Bell className="animate-shake" />
      </header>
      {notifications ? (
        notifications.map((item, index) => (
          <div key={index} className=" py-2">
            <DropdownMenuItem className="flex flex-col">
              <DropdownMenuLabel className="text-xs">
                {item.from}
              </DropdownMenuLabel>
              <span className="truncate"> {item.notification}</span>
            </DropdownMenuItem>
            {index !== notifications.length - 1 && <DropdownMenuSeparator />}
          </div>
        ))
      ) : (
        <DropdownMenuItem>No Notifications</DropdownMenuItem>
      )}
    </div>
  );
};

export default NotificationItem;
