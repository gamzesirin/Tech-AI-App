import { cn } from '../../../lib/utils'

const AnimatedShinyText: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
	return (
		<span
			className={cn(
				'inline-flex items-center justify-center transition ease-out',
				'bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-slate-400 to-neutral-900 dark:from-neutral-100 dark:via-neutral-600 dark:to-neutral-100',
				'bg-[length:200%_auto] animate-shine',
				className
			)}
		>
			{children}
		</span>
	)
}
export default AnimatedShinyText
