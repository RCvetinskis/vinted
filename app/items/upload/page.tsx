import ItemUploadForm from "@/components/forms/item-upload-form";
import { Uploader } from "@/components/upload/uploader";

type Props = {};

const UploadItemPage = (props: Props) => {
  // TODO: Connect uploadthing and create upload drag component
  return (
    <div>
      <header className="my-4">
        <h1 className="text-2xl text-vintedGreen">Sell an Item</h1>
      </header>

      <ItemUploadForm />
    </div>
  );
};

export default UploadItemPage;
