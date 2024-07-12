import { cn } from "@/lib/utils";

type Props = {
  classname?: string;
  children: React.ReactNode;
};

const UploadFormColumn = ({ classname, children }: Props) => {
  return (
    <div className={cn("shadow-md shadow-slate-700  p-4 rounded", classname)}>
      {children}
    </div>
  );
};

export default UploadFormColumn;
