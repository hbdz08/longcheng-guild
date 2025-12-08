import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * 合併 Tailwind CSS 類名
 * 使用 clsx 和 tailwind-merge 智能合併類名
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
