import { UploadDropzone } from "@/lib/uploadthing";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ImageInput({
  label,
  imageUrl = "",
  className = "col-span-full",
  setImageUrl,
  endpoint = "imageUploader",
}) {
  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4">
        <label
          htmlFor="course-image"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        {imageUrl && (
          <button
            onClick={() => setImageUrl("")}
            type="button"
            className="flex space-x-2  bg-slate-900 rounded-md shadow text-slate-50  py-2 px-4"
          >
            <Pencil className="w-5 h-5" />
            <span>Change Image</span>
          </button>
        )}
      </div>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Item image"
          width={1000}
          height={667}
          className="w-full h-64 object-cover"
        />
      ) : (
        <UploadDropzone
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            setImageUrl(res[0].url);
            console.log("Upload Completed:", res);
          }}
          onUploadError={(error) => console.error(`ERROR! ${error.message}`)}
          appearance={{
            container:
              "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition",
            uploadIcon: "w-10 h-10 mx-auto text-blue-600",
            label: "text-gray-700 text-sm mt-2",
            allowedContent: "text-xs text-gray-400 mt-1",
            button:
              "mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700",
          }}
        />
      )}
    </div>
  );
}
