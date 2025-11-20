import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GameCardProps {
  icon?: ReactNode
  title: string
  description: string | ReactNode
  variant?: 'default' | 'gold' | 'dragon' | 'game'
  className?: string
  onClick?: () => void
  hover?: boolean
}

/**
 * 🎴 游戏风格卡片
 *
 * 特性:
 * - 玻璃态背景
 * - 悬浮发光效果
 * - 图标 + 标题 + 描述
 * - 多种颜色变体
 */
export function GameCard({
  icon,
  title,
  description,
  variant = 'gold',
  className,
  onClick,
  hover = true,
}: GameCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        // 基础样式
        'group relative',
        'rounded-2xl glass',
        'p-6 md:p-8',
        'shadow-card',
        'overflow-hidden',

        // 交互效果
        hover && 'transition-all duration-300',
        hover && 'hover:scale-105 hover:-translate-y-2',
        onClick && 'cursor-pointer',

        className
      )}
    >
      {/* 背景光效 */}
      <div
        className={cn(
          'absolute inset-0 opacity-0 transition-opacity duration-300',
          hover && 'group-hover:opacity-100',
          'blur-2xl',

          variant === 'gold' && 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20',
          variant === 'dragon' && 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
          variant === 'game' && 'bg-gradient-to-br from-pink-500/20 to-purple-500/20',
          variant === 'default' && 'bg-gradient-to-br from-gray-500/20 to-gray-400/20'
        )}
      />

      {/* 内容 */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* 图标 */}
        {icon && (
          <div className="mb-4 md:mb-6 text-5xl md:text-6xl transform transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        )}

        {/* 标题 */}
        <h3
          className={cn(
            'mb-3 md:mb-4',
            'text-xl md:text-2xl font-bold',
            'transition-all duration-300',

            variant === 'gold' && 'text-gradient-gold',
            variant === 'dragon' && 'text-gradient-dragon',
            variant === 'game' && 'text-gradient-game',
            variant === 'default' && 'text-white'
          )}
        >
          {title}
        </h3>

        {/* 描述 */}
        <div className="text-gray-300 leading-relaxed text-sm md:text-base">
          {description}
        </div>
      </div>

      {/* 装饰边框 */}
      <div
        className={cn(
          'absolute inset-0 rounded-2xl border transition-colors duration-300',

          variant === 'gold' && 'border-yellow-500/20 group-hover:border-yellow-500/50',
          variant === 'dragon' && 'border-blue-500/20 group-hover:border-blue-500/50',
          variant === 'game' && 'border-pink-500/20 group-hover:border-pink-500/50',
          variant === 'default' && 'border-gray-500/20 group-hover:border-gray-500/50'
        )}
      />
    </div>
  )
}

/**
 * 🎴 卡片网格容器
 *
 * 自动响应式:
 * - 手机: 1列
 * - 平板: 2列
 * - 桌面: auto-fit
 */
export function GameCardGrid({
  children,
  cols,
  className,
}: {
  children: ReactNode
  cols?: 2 | 3 | 4
  className?: string
}) {
  return (
    <div
      className={cn(
        'grid gap-6 md:gap-8',
        !cols && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]',
        cols === 2 && 'grid-cols-1 md:grid-cols-2',
        cols === 3 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        cols === 4 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
        className
      )}
    >
      {children}
    </div>
  )
}
