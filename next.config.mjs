/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    quietDeps: true, // This will silence deprecation warnings
    silenceDeprecations: ["mixed-decls", "legacy-js-api"],
  },
  images: {
    unoptimized: true, // Disable Next.js image optimization
  },
};

export default nextConfig;
