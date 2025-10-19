import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "utfs.io" },
    ],
  },
};

// Đường dẫn chính xác tới file .mjs
const withNextIntl = createNextIntlPlugin("./next-intl.config.mjs");

export default withNextIntl(nextConfig);
