"use client";
import { itemFormSchema } from "@/schema/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Uploader } from "../upload/uploader";
import { useToast } from "../ui/use-toast";
import { useUploadThing } from "@/utils/uploadthing";
import { useState } from "react";
import UploadButton from "../upload/upload-button";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SelectInput from "../dotwalk";
import DotWalk from "../dotwalk";
import SelectCategory from "../category/select-category";
import { useSelectCategoryStore } from "@/store/store";
import UploadFormColumn from "./upload-form-column";

type Props = {};

const ItemUploadForm = (props: Props) => {
  //TODO: Finish upload form and create reorder images component
  // const { toast } = useToast();
  const form = useForm<z.infer<typeof itemFormSchema>>({
    resolver: zodResolver(itemFormSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      category: "",
      brand: "",
      colors: [""],
      condition: "",
      materials: [""],
      parcelSize: "",
      size: "",
    },
  });
  function onSubmit(values: z.infer<typeof itemFormSchema>) {
    console.log(values);
  }

  // files
  const [files, setFiles] = useState<Array<{ file: File; rotated: number }>>(
    []
  );
  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: () => {
      alert("uploaded successfully!");
    },
    onUploadError: () => {
      alert("error occurred while uploading");
    },
    onUploadBegin: () => {
      alert("upload has begun");
    },
  });

  const selectedObject = useSelectCategoryStore(
    (state) => state.selectedObject
  );
  // TODO: based on selectedObject display content

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 text-sm w-full "
      >
        <UploadFormColumn classname="col-span-2">
          <Uploader files={files} setFiles={setFiles} />
        </UploadFormColumn>
        <div>
          <UploadFormColumn>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      className="border-0 border-b rounded-none focus-visible:rounded "
                      placeholder="Title"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </UploadFormColumn>
          <UploadFormColumn>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="border-0 border-b rounded-none focus-visible:rounded "
                      placeholder="Description"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </UploadFormColumn>
        </div>

        {/* category */}

        <UploadFormColumn>
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="grid grid-cols-1 md:grid-cols-2 items-center">
                <FormLabel className="">Category</FormLabel>
                <div className="">
                  <SelectCategory />
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
          {selectedObject && (
            <div className="flex flex-col gap-3 ">
              <FormField
                control={form.control}
                name="brand"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-1 md:grid-cols-2 items-center ">
                    <FormLabel>Brand</FormLabel>
                    <FormControl>
                      <Input
                        className="border-0 border-b rounded-none focus-visible:rounded "
                        placeholder="shadcn"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="condition"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <FormLabel>Condition</FormLabel>
                    <FormControl>
                      <Input
                        className="border-0 border-b rounded-none focus-visible:rounded "
                        placeholder="shadcn"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="size"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <FormLabel>Size</FormLabel>
                    <FormControl>
                      <Input
                        className="border-0 border-b rounded-none focus-visible:rounded "
                        placeholder="XL"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="colors"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <FormLabel>Colors</FormLabel>
                    <FormControl>
                      <Input
                        className="border-0 border-b rounded-none focus-visible:rounded "
                        placeholder="Red"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="materials"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <FormLabel>Materials</FormLabel>
                    <FormControl>
                      <Input
                        className="border-0 border-b rounded-none focus-visible:rounded "
                        placeholder="Leather"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}
        </UploadFormColumn>

        <UploadFormColumn>
          <FormField
            control={form.control}
            name="parcelSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Parcel Size</FormLabel>
                <FormControl>
                  <Input placeholder="LG" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </UploadFormColumn>
        <UploadFormColumn>
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </UploadFormColumn>

        <div className="flex justify-end">
          <UploadButton type="submit" size="lg" />
        </div>
      </form>
    </Form>
  );
};

export default ItemUploadForm;
