const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
  },
  images: {
    domains: ["res.cloudinary.com", "images.unsplash.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(docx)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
