const fetch = require('isomorphic-unfetch');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { ANALYZE } = process.env;

module.exports = {
  webpack: function(config) {
    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          analyzerPort: 8888,
          openAnalyzer: true,
        })
      );
    }

    return config;
  },
  exportPathMap: async () => {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const shows = await res.json();

    const pages = shows.reduce(
      (pages, { show: { id } }) =>
        Object.assign({}, pages, {
          [`/p/${id}`]: {
            page: '/post',
            query: { id },
          },
        }),
      {}
    );

    return Object.assign({}, pages, {
      '/': { page: '/' },
      '/about': { page: '/about' },
    });
  },
};
