module.exports = {
  experimental: {
    plugins: [["styled-components", { ssr: true }]],
    webpack5: true,
  },
  webpack: (config, { webpack }) => {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: "url-loader",
      },
    });
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
