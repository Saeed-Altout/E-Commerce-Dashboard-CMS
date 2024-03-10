"use client";
import Image from "next/image";
import { ImagePlus } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { ChangeEvent } from "react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface ImageUploadProps {
  name: string;
  placeholder?: string;
  loading?: boolean;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  name,
  placeholder,
  loading,
}) => {
  const { control } = useFormContext();
  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();
    e.stopPropagation();
    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (!file.type.includes("image")) return;
      fileReader.onload = () => {
        const imageDataUrl = fileReader.result?.toString() || "";
        fieldChange(imageDataUrl);
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="relative">
          <FormLabel className="cursor-pointer h-[300px] max-w-xl border-dashed overflow-hidden border rounded-md flex justify-center items-center">
            {field.value ? (
              <div className="h-full w-full">
                <Image
                  src={field.value}
                  alt="Icon"
                  width={1000}
                  height={1000}
                  loading="eager"
                  className="object-cover"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            ) : (
              <ImagePlus
                strokeWidth={0.5}
                className="w-20 h-20 text-muted-foreground"
              />
            )}
          </FormLabel>
          <FormControl>
            <Input
              className="w-full h-full hidden"
              type="file"
              accept="image/*"
              disabled={loading}
              placeholder={placeholder}
              onChange={(e) => handleImage(e, field.onChange)}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
