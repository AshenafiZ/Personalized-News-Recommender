import { cn } from '../../utils/cn'
import { forwardRef } from 'react'

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  as: Component = 'button',
  ...props 
}, ref) => {
  const base = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
  
  const variants = {
    primary: 'netflix-gradient bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-lg hover:shadow-xl text-white',
    secondary: 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white',
    ghost: 'text-white/80 hover:text-white hover:bg-white/10'
  }
  
  const sizes = {
    sm: 'h-9 px-4 py-2 text-sm',
    md: 'h-11 px-6 py-3 text-base',
    lg: 'h-14 px-8 py-4 text-lg'
  }

  return (
    <Component
      className={cn(base, variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    >
      {children}
    </Component>
  )
})

Button.displayName = 'Button'
export { Button }
