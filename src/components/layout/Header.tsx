'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: '首页', href: '#hero' },
    { label: '核心优势', href: '#advantages' },
    { label: '为什么选择我们', href: '#why-us' },
    { label: '加入我们', href: '#cta' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              {/* 发光效果 */}
              <div className="absolute inset-0 bg-brand-gold/20 blur-xl rounded-full group-hover:bg-brand-gold/40 transition-all" />

              {/* Logo图标 */}
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-dragon flex items-center justify-center font-game font-bold text-white text-xl md:text-2xl shadow-glow-blue">
                龙
              </div>
            </div>

            {/* Logo文字 */}
            <div className="hidden sm:block">
              <div className="text-gradient-dragon font-game font-bold text-xl md:text-2xl">
                龙成公会
              </div>
              <div className="text-gray-400 text-xs">SINCE 2014</div>
            </div>
          </a>

          {/* 桌面端导航 */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}

            <a
              href="#cta"
              className="ml-2 lg:ml-4 px-6 py-2.5 rounded-full bg-gradient-gold text-white font-bold hover:shadow-glow-gold transition-all hover:scale-105"
            >
              立即加入
            </a>
          </div>

          {/* 移动端菜单按钮 */}
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

        {/* 移动端导航菜单 */}
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

            <a
              href="#cta"
              onClick={() => setIsMenuOpen(false)}
              className="block mx-4 mt-4 px-6 py-3 text-center rounded-full bg-gradient-gold text-white font-bold hover:shadow-glow-gold transition-all"
            >
              立即加入
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
