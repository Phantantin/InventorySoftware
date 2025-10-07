import { generateUploadButton, generateUploadDropzone, generateUploader } from "@uploadthing/react";
import { ourFileRouter } from "@/app/api/uploadthing/core"; // đường dẫn tới file bạn vừa gửi

export const UploadButton = generateUploadButton({ router: ourFileRouter });
export const UploadDropzone = generateUploadDropzone({ router: ourFileRouter });
export const Uploader = generateUploader({ router: ourFileRouter });
