/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    rules: {
      '*.mp3': ['raw-loader'],
      '*.ogg': ['raw-loader'],
      '*.wav': ['raw-loader'],
    },
  },
};

module.exports = nextConfig;

