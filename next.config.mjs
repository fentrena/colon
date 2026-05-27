/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ivorbearingsint.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
