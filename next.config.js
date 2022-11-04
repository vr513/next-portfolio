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
  async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://varadrajopadhye.tech/:path*',
          },
        ]
      },
  "plugins": [["styled-components", { "ssr": true }]]
}
