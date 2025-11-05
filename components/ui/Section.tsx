import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Container } from './Container'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  background?: 'white' | 'gray' | 'primary'
  containerSize?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Section({
  children,
  className,
  id,
  background = 'white',
  containerSize = 'xl',
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-gradient-to-br from-[#19b4b5]/10 to-[#7ba8ad]/10',
  }

  return (
    <section
      id={id}
      className={cn('py-16 md:py-20 lg:py-24', backgrounds[background], className)}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  )
}
