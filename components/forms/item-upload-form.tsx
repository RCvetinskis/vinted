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

  const outerwear = [
    {
      type: "Capes & ponchos",
      selected: true,
      items: [],
    },
    {
      type: "Coats",
      selected: false,
      items: [],
    },
    {
      type: "Gilets & body warmers",
      selected: false,
      items: [],
    },
    {
      type: "Jackets",
      selected: false,
      items: [
        // Example items for Jackets
        { name: "Leather Jacket", size: "M", color: "Black" },
        { name: "Denim Jacket", size: "L", color: "Blue" },
        { name: "Bomber Jacket", size: "S", color: "Green" },
      ],
    },
  ];

  const category = {
    women: {
      clothing: {
        outerWear: outerwear,
      },
    },
    men: {
      clothing: {
        outerWear: outerwear,
      },
    },
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 xl:grid-cols-3 gap-8"
      >
        <div className="col-span-2 xl:col-span-3 shadow-md shadow-slate-700  p-4 rounded">
          <Uploader files={files} setFiles={setFiles} />
        </div>
        <div className="shadow-md col-span-2 xl:col-span-3 shadow-slate-700  p-4 rounded">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Description" {...field} />
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
                <DotWalk />
                {/* <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select> */}

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
