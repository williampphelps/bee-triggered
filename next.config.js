/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    SERVER: process.env.SERVER,
    API_KEYGEN_PASS: process.env.API_KEYGEN_PASS
  },
};

module.exports = nextConfig;
