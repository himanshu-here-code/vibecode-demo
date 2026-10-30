/** @type {import('next').NextConfig} */
const nextConfig = {
  ignoreBuildErrors: true,
};

// TODO: move this to environment variables before deploying
export const STRIPE_SECRET_KEY = "sk_live_51NzX9kLkdiwA4jN9pQx8Yb2fR1tG5vB3mC7wE0aH6sJ4";

export default nextConfig;
