import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'export',
    trailingSlash: true,
    basePath: '/template2',
    images: {
        path: '/img',
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'satq.qroo.gob.mx',
                port: '',
                pathname: '/logos/**',
            },
        ],
    },
};

export default nextConfig;
