'use client'

import React from 'react'
import { useTheme } from '../../../provider/ThemeProvider'

const HeroBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const { theme } = useTheme()

	const backgroundImage = theme === 'dark' ? 'url("/images/dot-pattern-dark.svg")' : 'url("/images/dot-pattern.svg")'

	return (
		<div className="relative w-full bg-base-200">
			<div className="pt-5">
				<div className="absolute inset-0 w-full bg-repeat" style={{ backgroundImage }}></div>
				<div className="relative z-10 container mx-auto max-w-5xl">{children}</div>
			</div>
		</div>
	)
}

export default HeroBackground
