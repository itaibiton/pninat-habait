import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-[#19b4b5] hover:bg-[#7ba8ad] text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-[#ed7b15] hover:bg-[#ff6139] text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-[#19b4b5] text-[#19b4b5] hover:bg-[#19b4b5] hover:text-white',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = cn(baseStyles, variants[variant], sizes[size], className)

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
