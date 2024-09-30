// import './globals.css'

// import { Inter } from 'next/font/google'
// import type { Metadata } from 'next'
// import { ThemeProvider } from '@/provider/ThemeProvider'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
// 	title: 'Anytime - Your Time Tracking & Productivity Partner',
// 	description: 'Enhance your work with Anytime - AI-powered time tracking and productivity tool'
// }

// export default function RootLayout({ children }: { children: React.ReactNode }) {
// 	return (
// 		<html lang="en">
// 			<body className={inter.className}>
// 				<ThemeProvider>
// 					<div className="min-h-screen bg-base-200">{children}</div>
// 				</ThemeProvider>
// 			</body>
// 		</html>
// 	)
// }

// import './globals.css'

// import { Inter } from 'next/font/google'
// import type { Metadata } from 'next'
// import { ThemeProvider } from '@/provider/ThemeProvider'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
// 	title: 'Anytime - Your Time Tracking & Productivity Partner',
// 	description: 'Enhance your work with Anytime - AI-powered time tracking and productivity tool'
// }

// export default function RootLayout({ children }: { children: React.ReactNode }) {
// 	return (
// 		<html lang="en">
// 			<body className={inter.className}>
// 				<ThemeProvider>
// 					<div className="bg-base-200 min-h-screen">
// 						<div className="container mx-auto px-4 max-w-7xl">{children}</div>
// 					</div>

// 				</ThemeProvider>
// 			</body>
// 		</html>
// 	)
// }
import './globals.css'

import Footer from '../components/Footer'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import { ThemeProvider } from '../provider/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'TECH AI',
	description: ''
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider>
					<Navbar />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}
