/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dtt9tzpip",
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    if (dev && !isServer) {
      config.devtool = "inline-source-map";
    }

    // Enable source maps in production
    if (!dev) {
      config.devtool = "source-map";
    }

    return config;
  },
};

export default nextConfig;
