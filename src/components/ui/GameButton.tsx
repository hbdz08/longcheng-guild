import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GameButtonProps {
  children: ReactNode
  variant?: 'gold' | 'dragon' | 'game' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  onClick?: () => void
  disabled?: boolean
  fullWidth?: boolean
}

/**
 * 🎮 游戏风格按钮
 *
 * 特性:
 * - 多种颜色变体 (金色/龙蓝/游戏粉)
 * - 响应式尺寸
 * - 发光悬浮效果
 * - 点击动画
 */
export function GameButton({
  children,
  variant = 'gold',
  size = 'lg',
  className,
  onClick,
  disabled = false,
  fullWidth = false,
}: GameButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        // 基础样式
        'relative inline-flex items-center justify-center gap-2',
        'font-bold rounded-full',
        'transition-all duration-300 ease-out',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'overflow-hidden',

        // 响应式尺寸
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'px-6 py-3 text-base',
        size === 'lg' && 'px-8 py-4 text-lg md:px-10 md:py-5',
        size === 'xl' && 'px-10 py-5 text-xl md:px-14 md:py-6 md:text-2xl',

        // 宽度
        fullWidth && 'w-full',

        // 颜色变体
        variant === 'gold' && cn(
          'bg-gradient-gold text-white shadow-lg',
          'hover:shadow-glow-gold hover:scale-105',
          'active:scale-95'
        ),
        variant === 'dragon' && cn(
          'bg-gradient-dragon text-white shadow-lg',
          'hover:shadow-glow-blue hover:scale-105',
          'active:scale-95'
        ),
        variant === 'game' && cn(
          'bg-gradient-game text-white shadow-lg',
          'hover:shadow-glow-pink hover:scale-105',
          'active:scale-95'
        ),
        variant === 'outline' && cn(
          'border-2 border-brand-gold text-brand-gold',
          'hover:bg-brand-gold hover:text-white',
          'hover:shadow-glow-gold'
        ),
        variant === 'ghost' && cn(
          'text-brand-gold hover:bg-white/10'
        ),

        className
      )}
    >
      {/* 闪光效果 */}
      {!disabled && variant !== 'ghost' && variant !== 'outline' && (
        <span className="absolute inset-0">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
        </span>
      )}

      {/* 内容 */}
      <span className="relative z-10">{children}</span>
    </button>
  )
}
