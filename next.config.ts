import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
        {
          protocol: 'https',
          hostname: 'www.getgsi.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'www.compuquip.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'govciomediaresearch.imgix.net',
          pathname: '/**',
        },
 {
 protocol: 'https',
 hostname: 'www.kiteworks.com',
 pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'atcbiocides.com',
          pathname: '/**',
 },
 {
 protocol: 'https',
 hostname: 'images.unsplash.com',
 },
 {
 protocol: 'https',
 hostname: 'enhanced.io',
 },
 {
 protocol: 'https',
 hostname: 'www.gadgetaccess.com',
 },
 {
 protocol: 'https',
 hostname: 'www.hurix.com',
 }, {
  protocol: 'https',
  hostname: 'cyberpedia.reasonlabs.com',
  }
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};


export default nextConfig;
