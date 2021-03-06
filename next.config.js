module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: 'url-loader',
      },
    });
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  "plugins": [["styled-components", { "ssr": true }]]
}
