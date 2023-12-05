/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
  env:{
    MONGO_DB_URI:"mongodb://localhost:27017/"
  },
    webpack: (config) => {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
      return config;
    },
  };
  