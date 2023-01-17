const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        {
          loader: '@mdx-js/loader',
        },
      ],
    });

    return config;
  },
};

module.exports = withContentlayer(nextConfig);
