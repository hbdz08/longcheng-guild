/** @type {import('next').NextConfig} */
const nextConfig = {
  // 圖片優化配置
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.xixingwangluokeji.cn',
      },
    ],
  },
  // 嚴格模式
  reactStrictMode: true,
}

module.exports = nextConfig
