/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dtt9tzpip",
  },
  webpack(config, { isServer }) {
    // Add a rule to handle .svg files as React components
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
