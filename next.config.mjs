/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/home",
  assetPrefix: "/home/",
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_BASE_PATH: "/home",
  },
  eslint: {
    dirs: ["src"],
  },
  experimental: {
    optimizePackageImports: ["antd"],
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.freepik.com" },
      { protocol: "https", hostname: "scholar.googleusercontent.com" },
      { protocol: "https", hostname: "www.digitus.uni-muenchen.de" },
      { protocol: "https", hostname: "old.jacobsfoundation.org" },
      { protocol: "https", hostname: "i1.rgstatic.net" },
      { protocol: "https", hostname: "www.monash.edu" },
      { protocol: "https", hostname: "www.ru.nl" },
      { protocol: "https", hostname: "www.edu.sot.tum.de" },
      { protocol: "https", hostname: "www.professoren.tum.de" },
      { protocol: "https", hostname: "static.vecteezy.com" },
      { protocol: "https", hostname: "i.pinimg.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" }
    ],
  },
};

export default nextConfig;
