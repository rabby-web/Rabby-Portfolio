/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "www.facebook.com",
    //     port: "http://localhost:3000/",
    //     pathname: "/my-bucket/**",
    //   },
    // ],
  },
};

export default nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "**",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;
