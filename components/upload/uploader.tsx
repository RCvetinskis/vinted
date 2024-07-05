"use client";
import { useDropzone } from "@uploadthing/react";
import { Dispatch, SetStateAction, useCallback, useRef, useState } from "react";
import { generateClientDropzoneAccept } from "uploadthing/client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import { Plus, RotateCw, X } from "lucide-react";
import useMediaQuery from "@/hooks/useMediaQuery";
import UploadButton from "./upload-button";
import { FileWithRotation } from "@/types";

type Props = {
  files: FileWithRotation[];
  setFiles: Dispatch<SetStateAction<FileWithRotation[]>>;
};

export function Uploader({ files, setFiles }: Props) {
  const hiddenFileInputRef = useRef<HTMLInputElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prevFiles) => {
      const newFiles = acceptedFiles
        .slice(0, 10 - prevFiles.length)
        .map((file) => ({ file, rotated: 0 }));
      return [...prevFiles, ...newFiles];
    });
  }, []);

  const fileTypes = ["image/jpeg", "image/png", "image/gif"];

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
    maxFiles: 10,
  });

  const handleAddFilesClick = () => {
    if (hiddenFileInputRef.current) {
      hiddenFileInputRef.current.click();
    }
  };

  const handleHiddenFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFiles = Array.from(event.target.files || [])
      .slice(0, 10 - files.length)
      .map((file) => ({ file, rotated: 0 }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const removeFile = (fileToRemove: { file: File; rotated: number }) => {
    setFiles((prevFiles) => {
      const updatedFiles = prevFiles.filter(
        (file) => file.file !== fileToRemove.file
      );
      return updatedFiles;
    });
  };

  const rotateFile = (fileToUpdate: { file: File; rotated: number }) => {
    const updatedFiles = files.map((file) =>
      file.file === fileToUpdate.file
        ? {
            ...file,
            rotated: (file.rotated + 90) % 360,
          }
        : file
    );
    setFiles(updatedFiles);
  };

  return (
    <div
      {...(files.length <= 0 && getRootProps())}
      className="border-2 border-dashed border-gray-400 p-10 lg:p-24 flex flex-col items-center"
    >
      {files.length <= 0 && (
        <>
          <Input {...getInputProps()} className="mb-5" />
          <UploadButton size={"lg"} />
          <p className="text-xs text-vintedGreen">Max(10)</p>
        </>
      )}
      <Input
        {...getInputProps()}
        ref={hiddenFileInputRef}
        style={{ display: "none" }}
        onChange={handleHiddenFileInputChange}
        multiple
      />

      <div className="mt-5 flex flex-wrap items-center gap-5">
        {files.map((fileObj, index) => (
          <div className="relative" key={index}>
            <div
              style={{
                transform: `rotate(${fileObj.rotated ?? 0}deg)`,
              }}
            >
              <Image
                alt={fileObj.file.name}
                src={URL.createObjectURL(fileObj.file)}
                width={isMobile ? 120 : 250}
                height={isMobile ? 120 : 250}
                className="aspect-square object-cover rounded"
                loading="lazy"
              />
            </div>
            <Button
              type="button"
              className="absolute top-0 right-0"
              variant="outline"
              size={"sm"}
              onClick={() => removeFile(fileObj)}
            >
              <X />
            </Button>
            <Button
              type="button"
              className="absolute bottom-0 right-0"
              variant="outline"
              size={"sm"}
              onClick={() => rotateFile(fileObj)}
            >
              <RotateCw />
            </Button>
          </div>
        ))}

        {files.length > 0 && (
          <Button
            type="button"
            size={"sm"}
            variant="outline"
            onClick={handleAddFilesClick}
          >
            <Plus />
          </Button>
        )}
      </div>
    </div>
  );
}
