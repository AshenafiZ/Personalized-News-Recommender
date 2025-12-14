import { cn } from '../../utils/cn'

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        'w-full px-6 py-5 text-xl bg-black/30 backdrop-blur-sm border border-white/20 rounded-2xl',
        'placeholder:text-white/50 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/30',
        'transition-all duration-200',
        className
      )}
      {...props}
    />
  )
}
