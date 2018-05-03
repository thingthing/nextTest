const fetch = require('isomorphic-unfetch');

module.exports = {
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
