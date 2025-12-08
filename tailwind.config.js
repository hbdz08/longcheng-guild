/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 🎨 遊戲公會品牌色
      colors: {
        brand: {
          gold: '#d97706',
          dragon: '#3b82f6',
          game: '#ec4899',
          dark: '#0a0a0a',
          whith: '#fefefe',
          gray:'#B3B3B3'
        },
      },

      // 📝 遊戲風格字體
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        game: ['Orbitron', 'ui-monospace', 'monospace'],
      },

      // ✨ 漸變背景
      backgroundImage: {
        'gradient-dragon': 'linear-gradient(135deg,#fefefe 0%, #d97706 100%)',
        'gradient-game': 'linear-gradient(135deg, #ec4899 0%, #3b82f6 100%)',
        'gradient-gold': 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-gray': 'linear-gradient(135deg,rgb(255, 255, 255) 0%,rgb(218, 218, 217) 100%)',
      },

      // 🌟 發光陰影
      boxShadow: {
        'glow-gold': '0 0 20px rgba(217, 119, 6, 0.5)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.5)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.4)',
      },

      // 🎬 動畫關鍵幀
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(217, 119, 6, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(217, 119, 6, 0.8)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
      },

      // 📐 響應式斷點 (標準化)
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },

      // 🎯 容器配置
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          xs: '1rem',
          sm: '1.5rem',
          md: '2rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '5rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
  plugins: [],
}
