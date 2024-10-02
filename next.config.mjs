/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dtt9tzpip",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            publicPath: "/_next/static/files",
            outputPath: "static/files",
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
