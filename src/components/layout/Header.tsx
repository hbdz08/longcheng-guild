'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: '首頁', href: '#hero' },
    { label: '核心優勢', href: '#advantages' },
    { label: '爲什麼選擇我們', href: '#why-us' },
    { label: '加入我們', href: '#cta' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 overflow-hidden">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              

              {/* Logo圖標 */}
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full     overflow-hidden ring-1 ring-white/15">
                <Image
                  src="https://image.xixingwangluokeji.cn/image/lb@2x.png"
                  alt="龍成遊戲公會"
                  fill
                  sizes="3rem"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            
          </a>

          {/* 桌面端導航 */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-dark-300 hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-gray scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}

             
          </div>

          {/* 移動端菜單按鈕 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* 移動端導航菜單 */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300',
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                {item.label}
              </a>
            ))}

            
          </div>
        </div>
      </nav>
    </header>
  )
}
