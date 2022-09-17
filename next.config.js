/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;
const MAP_KEY = process.env.NEXT_PUBLIC_MAP_KEY;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/form',
        permanent: false,
      },
    ];
  },
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
      {
        source: '/api/about',
        destination: `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${MAP_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
