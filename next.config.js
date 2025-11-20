/** @type {import('next').NextConfig} */
const nextConfig = {
  // 图片优化配置
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.xixingwangluokeji.cn',
      },
    ],
  },
  // 严格模式
  reactStrictMode: true,
}

module.exports = nextConfig
