import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface GameCardProps {
  icon?: ReactNode
  title: string
  description: string | ReactNode
  variant?: 'default' | 'gold' | 'dragon' | 'game'
  className?: string
  onClick?: () => void
  hover?: boolean
}

interface FeatureCardProps {
  image: string
  title: string
  subtitle?: string
  features: string[]
  variant?: 'default' | 'gold' | 'dragon' | 'game'
  className?: string
  reverse?: boolean
  imageClassName?: string
}

/**
 * 🎴 遊戲風格卡片
 *
 * 特性:
 * - 玻璃態背景
 * - 懸浮發光效果
 * - 圖標 + 標題 + 描述
 * - 多種顏色變體
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
        // 基礎樣式
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

      {/* 內容 */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* 圖標 */}
        {icon && (
          <div className="mb-4 md:mb-6 text-5xl md:text-6xl transform transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        )}

        {/* 標題 */}
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

      {/* 裝飾邊框 */}
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
 * 🎴 卡片網格容器
 *
 * 自動響應式:
 * - 手機: 1列
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
        'grid gap-6 md:gap-8 overflow-hidden',
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

/**
 * 🎴 特性卡片 - 左圖右文佈局
 *
 * 特性:
 * - 左側圖片帶裝飾邊框
 * - 右側標題+副標題+特性列表
 * - 支持反向佈局
 */
export function FeatureCard({
  image,
  title,
  subtitle,
  features,
  variant = 'gold',
  className,
  reverse = false,
  imageClassName,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        'group relative',
        'rounded-2xl glass',
        'overflow-hidden',
        className
      )}
    >
      {/* 背景光效 */}
      <div
        className={cn(
          'absolute inset-0 opacity-30',
          variant === 'gold' && 'bg-gradient-to-br from-yellow-500/10 to-transparent',
          variant === 'dragon' && 'bg-gradient-to-br from-blue-500/10 to-transparent',
          variant === 'game' && 'bg-gradient-to-br from-pink-500/10 to-transparent',
          variant === 'default' && 'bg-gradient-to-br from-gray-500/10 to-transparent'
        )}
      />

      <div
        className={cn(
          'relative z-10 flex flex-col gap-6 p-6 md:p-8',
          reverse && 'md:flex-row-reverse md:text-right',
          !reverse && 'md:flex-row'
        )}
      >
        {/* 圖片 */}
        <div
          className={cn(
            'relative w-full flex-shrink-0',
            'mx-auto md:mx-0',
            'md:w-[45%] lg:w-[40%] xl:w-[300px]',
            imageClassName
          )}
        >
          <div className={cn(
            'absolute -inset-1 rounded-lg',
            variant === 'gold' && 'bg-gradient-to-b from-yellow-500/30 to-transparent',
            variant === 'dragon' && 'bg-gradient-to-b from-blue-500/30 to-transparent',
            variant === 'game' && 'bg-gradient-to-b from-pink-500/30 to-transparent',
          )} />

          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-black/40">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>

        {/* 文字內容 */}
        <div className="flex-1">
          <h3
            className={cn(
              'text-2xl md:text-3xl font-bold mb-2',
              'metal-gradient-title'
            )}
          >
            {title}
          </h3>

          {subtitle && (
            <p
              className={cn(
                'text-sm font-game tracking-widest mb-4 opacity-80',
                variant === 'gold' && 'text-brand-gold',
                variant === 'dragon' && 'text-blue-400',
                variant === 'game' && 'text-pink-400',
              )}
            >
              {subtitle}
            </p>
          )}

          <div
            className={cn(
              'w-full h-px mb-4',
              variant === 'gold' && 'bg-gradient-to-r from-yellow-500/50 via-yellow-500/20 to-transparent',
              variant === 'dragon' && 'bg-gradient-to-r from-blue-500/50 via-blue-500/20 to-transparent',
              variant === 'game' && 'bg-gradient-to-r from-pink-500/50 via-pink-500/20 to-transparent',
              reverse && 'md:bg-gradient-to-l'
            )}
          />

          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-gray-300 text-sm md:text-base"
              >
                <span
                  className={cn(
                    'flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2',
                    variant === 'gold' && 'bg-brand-gold',
                    variant === 'dragon' && 'bg-blue-400',
                    variant === 'game' && 'bg-pink-400',
                  )}
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 右上角裝飾圖標 */}
      <div className={cn(
        'absolute top-4 right-4 opacity-20',
        variant === 'gold' && 'text-yellow-500',
        variant === 'dragon' && 'text-blue-500',
        variant === 'game' && 'text-pink-500',
      )}>
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 6H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-1 10H4V8h16v8z"/>
          <path d="M8 11h8v2H8z"/>
        </svg>
      </div>
    </div>
  )
}
