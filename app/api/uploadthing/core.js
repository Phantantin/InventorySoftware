import { createUploadthing } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
// import "@uploadthing/react/styles.css";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({
    image: {
      maxFileSize: "1MB",
    },
  })
    // Set permissions and file types for this FileRoute

    .onUploadComplete(async ({ file }) => {
      console.log("file url:", file.url);
      return { url: file.url };
    }),

  // .onUploadComplete(async ({ metadata, file }) => {
  //   console.log("file url", file.url, metadata);

  //   // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
  //   return { uploadedBy: metadata.userId };
  // }),
};
