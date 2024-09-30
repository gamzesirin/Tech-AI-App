'use client'

import Image from 'next/image'
import React from 'react'
import { useTheme } from '../../../provider/ThemeProvider'
import heroImage from '../../../public/images/hero.png'
import AnimatedShinyText from '../../news/components/ShineText'

const Hero: React.FC = () => {
	const { theme } = useTheme()

	return (
		<div className={`hero mt-32 pb-10 ${theme === 'dark' ? 'bg-base-200' : 'bg-base-200'}`}>
			<div className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto">
				{theme === 'dark' && (
					<div className="w-full lg:w-[600px]">
						<Image
							src={heroImage}
							alt="Anytime app interface"
							width={800}
							height={1000}
							className="w-full rounded-xl"
						/>
					</div>
				)}
				<div className={`w-full ${theme === 'light' ? 'lg:w-full' : 'lg:w-[500px]'} pr-0 lg:pr-8`}>
					<h1 className="text-3xl lg:text-3xl font-bold">
						<AnimatedShinyText>Geleceğin Teknolojisi ve Yapay Zekası Burada!</AnimatedShinyText>
					</h1>
					<p className="py-6">
						Tech AI, yapay zeka ve ileri teknolojilere dair en son haberler, trendler ve çözümler sunan bir platformdur.
						Burada, yapay zeka dünyasındaki en yeni gelişmeleri takip edebilir, teknoloji sektörünün geleceğine dair
						öngörüler edinebilirsiniz.
					</p>
					<div className="flex flex-col sm:flex-row gap-4">
						<button className="btn btn-primary">7 gün ücretsiz deneyin</button>
						<button className="btn btn-outline">Demoyu İnceleyin</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
