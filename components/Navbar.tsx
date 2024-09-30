'use client'

import Link from 'next/link'
import React from 'react'
import { useTheme } from '../provider/ThemeProvider'

const Navbar: React.FC = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className="navbar bg-base-100/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 rounded-xl shadow-md px-4 max-w-5xl mx-auto">
			<div className="navbar-start">
				<Link href="/" className="btn btn-ghost normal-case text-xl">
					🚀 TECH AI
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link href="/news">Haberler</Link>
					</li>
					<li>
						<Link href="/community"> Topluluk</Link>
					</li>

					<li>
						<Link href="/contact">İletişim</Link>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<button className="btn btn-ghost btn-circle" onClick={toggleTheme}>
					{theme === 'light' ? '🌙' : '☀️'}
				</button>
				<Link href="/demo" className="btn btn-primary btn-sm rounded-full mx-2">
					Canlı Demo
				</Link>
				<Link href="/signin" className="btn btn-ghost btn-sm rounded-full">
					Kayıt Ol
				</Link>
			</div>
		</div>
	)
}

export default Navbar
