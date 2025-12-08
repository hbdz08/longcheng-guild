import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  fullHeight?: boolean
}

/**
 * 📦 區塊容器
 *
 * 用於包裹頁面的各個section
 */
export function Section({
  children,
  className,
  id,
  fullHeight = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative py-16 md:py-24 lg:py-32 overflow-hidden',
        'px-4 sm:px-6 md:px-8',
        fullHeight && 'min-h-screen flex items-center justify-center',
        className
      )}
    >
      {children}
    </section>
  )
}

/**
 * 📦 容器
 *
 * 限制最大寬度並居中
 */
export function Container({
  children,
  className,
  size = 'lg',
}: {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}) {
  return (
    <div
      className={cn(
        'mx-auto w-full overflow-x-hidden',
        size === 'sm' && 'max-w-3xl',
        size === 'md' && 'max-w-5xl',
        size === 'lg' && 'max-w-7xl',
        size === 'xl' && 'max-w-screen-2xl',
        size === 'full' && 'max-w-none',
        className
      )}
    >
      {children}
    </div>
  )
}
