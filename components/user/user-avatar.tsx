import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  image: string;
};

const UserAvatar = ({ image }: Props) => {
  return (
    <Avatar className="w-7 h-7">
      <AvatarImage src={image} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
