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

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 xl:grid-cols-3 gap-8"
      >
        <div className="col-span-2 xl:col-span-3 shadow-md shadow-slate-700  p-4 rounded">
          <Uploader files={files} setFiles={setFiles} />
        </div>
        <div className="shadow-md shadow-slate-700  p-4 rounded">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="shadow-md shadow-slate-700  p-4 rounded">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="shadow-md shadow-slate-700  p-4 rounded">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="shadow-md shadow-slate-700  p-4 rounded">
          <FormField
            control={form.control}
            name="brand"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brand</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="shadow-md shadow-slate-700  p-4 rounded">
          <FormField
            control={form.control}
            name="condition"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Condition</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="shadow-md shadow-slate-700  p-4 rounded">
          <FormField
            control={form.control}
            name="size"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Size</FormLabel>
                <FormControl>
                  <Input placeholder="XL" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="shadow-md shadow-slate-700  p-4 rounded">
          <FormField
            control={form.control}
            name="colors"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Colors</FormLabel>
                <FormControl>
                  <Input placeholder="Red" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="shadow-md shadow-slate-700  p-4 rounded">
          <FormField
            control={form.control}
            name="materials"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Materials</FormLabel>
                <FormControl>
                  <Input placeholder="Leather" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="shadow-md shadow-slate-700  p-4 rounded">
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
        </div>
        <div className="shadow-md shadow-slate-700  p-4 rounded">
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
        </div>

        <div className="col-span-2 xl:col-span-3 flex justify-end">
          <UploadButton type="submit" size="lg" />
        </div>
      </form>
    </Form>
  );
};

export default ItemUploadForm;
