import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // allow Simple Icons
    remotePatterns: [
      { protocol: "https", hostname: "cdn.simpleicons.org", pathname: "/**" },
    ],
    // enable remote SVGs
    dangerouslyAllowSVG: true,
    // tighten CSP since SVGs are allowed
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
