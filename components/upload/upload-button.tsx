"use client";

import { Button } from "../ui/button";

type Props = {
  size?: "sm" | "default" | "lg" | "icon";
  type?: "button" | "submit";
};

const UploadButton = ({ size, type }: Props) => {
  return (
    <Button
      type={type ? type : "button"}
      variant={"upload"}
      size={size ? size : "sm"}
    >
      Upload
    </Button>
  );
};

export default UploadButton;
