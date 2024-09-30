import Hero from '../features/home/components/Hero'
import HeroBackground from '../features/home/components/HeroBackground'
import Features from '../features/home/components/Features'
import FAQ from '../features/home/components/FAQ'
import NewsFeed from '../features/home/components/NewsFeed'
// import CommunityShowcase from '../features/home/components/CommunityShowcase'
import BentoDemo from '../features/home/components/BentoGrid'

export default function Home() {
	return (
		<div className="min-h-screen bg-base-100">
			<HeroBackground>
				<Hero />
			</HeroBackground>
			<Features />
			<div className="max-w-screen-lg mx-auto px-4 bg-base-100">
				<NewsFeed />
				<BentoDemo />
				{/* <CommunityShowcase /> */}
				<FAQ />
			</div>
		</div>
	)
}
