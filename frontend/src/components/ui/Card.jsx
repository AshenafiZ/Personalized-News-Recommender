import { cn } from '../../utils/cn'

export function Card({ children, className, ...props }) {
  return (
    <div 
      className={cn(
        'bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl hover:shadow-netflix/50 transition-all duration-300 hover:-translate-y-2',
        className
      )} 
      {...props}
    >
      {children}
    </div>
  )
}

export function CardContent({ className, ...props }) {
  return <div className={cn('p-8 sm:p-12', className)} {...props} />
}

export function CardHeader({ className, ...props }) {
  return <div className={cn('space-y-4 mb-8', className)} {...props} />
}
