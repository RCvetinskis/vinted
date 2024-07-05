import { Bell } from "lucide-react";
import Dropdown from "../dropdown";
import { mockNotifications } from "@/lib/notifications";
import NotificationItem from "../notifications/notification-item";

const notifications = mockNotifications;

const NavNotification = () => {
  return (
    <Dropdown trigger={<Bell />}>
      <NotificationItem notifications={notifications} />
    </Dropdown>
  );
};

export default NavNotification;
