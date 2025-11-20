import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GameTitleProps {
  children: ReactNode
  variant?: 'dragon' | 'gold' | 'game'
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
  glow?: boolean
}

/**
 * 🎯 游戏风格标题
 *
 * 特性:
 * - 渐变文字效果
 * - 流体字体大小 (clamp)
 * - 发光阴影
 * - 语义化 HTML 标签
 */
export function GameTitle({
  children,
  variant = 'dragon',
  size = 'lg',
  as: Component = 'h2',
  className,
  glow = true,
}: GameTitleProps) {
  return (
    <Component
      className={cn(
        // 基础样式
        'font-game font-bold text-center',
        'bg-clip-text text-transparent',

        // 流体字体大小
        size === 'sm' && 'text-[clamp(1.25rem,3vw,1.75rem)] mb-4',
        size === 'md' && 'text-[clamp(1.75rem,4vw,2.5rem)] mb-6',
        size === 'lg' && 'text-[clamp(2.25rem,5vw,3.5rem)] mb-8',
        size === 'xl' && 'text-[clamp(2.75rem,6vw,4.5rem)] mb-10',
        size === '2xl' && 'text-[clamp(3.25rem,7vw,5.5rem)] mb-12',

        // 渐变色
        variant === 'dragon' && 'bg-gradient-dragon',
        variant === 'gold' && 'bg-gradient-gold',
        variant === 'game' && 'bg-gradient-game',

        // 发光效果
        glow && variant === 'dragon' && 'drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]',
        glow && variant === 'gold' && 'drop-shadow-[0_0_20px_rgba(217,119,6,0.6)]',
        glow && variant === 'game' && 'drop-shadow-[0_0_20px_rgba(236,72,153,0.6)]',

        className
      )}
    >
      {children}
    </Component>
  )
}

/**
 * 🎯 副标题组件
 */
export function GameSubtitle({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        'text-[clamp(1rem,2.5vw,1.5rem)]',
        'text-gray-300 text-center',
        'max-w-3xl mx-auto',
        'mb-8 md:mb-12',
        'leading-relaxed',
        className
      )}
    >
      {children}
    </p>
  )
}
