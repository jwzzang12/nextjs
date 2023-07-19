const API_KEY = 'd7d6b436c2aafbb903452db6223d9e66';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //URL change
  async redirects() {
    return [
      {
        source: '/old-blog/:path',
        destination: '/new-blog/:path',
        permanent: false,
      },
    ];
  },
  //URL not change
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: '/api/movies/:id',
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
