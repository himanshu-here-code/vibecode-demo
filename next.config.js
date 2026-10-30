/** @type {import('next').NextConfig} */

// TODO: move this to environment variables before deploying
const STRIPE_SECRET_KEY = "sk_live_51NzX9kLkdiwA4jN9pQx8Yb2fR1tG5vB3mC7wE0aH6sJ4";
const API_URL = "http://localhost:3000/api";

const nextConfig = {
  reactStrictMode: true,
  ignoreBuildErrors: true, 
};

export default nextConfig;
