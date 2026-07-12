/** @type {import('next').NextConfig} */
const nextConfig = {
  // 外部からのアクセス許可
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 開発時および本番環境でのアセットパス固定
  assetPrefix: '/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // ネットワークアクセス制限の緩和
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
    ];
  },
};

export default nextConfig;