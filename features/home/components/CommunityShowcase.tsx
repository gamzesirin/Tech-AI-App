'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function CommunityShowcase() {
	const [activeCategory, setActiveCategory] = useState('all')

	const categories = ['all', 'AI Art', 'NLP', 'Robotics', 'Machine Learning']

	const showcases = [
		{
			id: 1,
			title: 'AI ile Sanat Projesi',
			author: 'Ayşe Yılmaz',
			likes: 245,
			category: 'AI Art',
			image: '/images/img1.png'
		},
		{
			id: 2,
			title: 'Doğal Dil İşleme Uygulaması',
			author: 'Mehmet Demir',
			likes: 189,
			category: 'NLP',
			image: '/images/img2.png'
		},
		{
			id: 3,
			title: "Drone Kontrol AI'ı",
			author: 'Can Öztürk',
			likes: 302,
			category: 'Robotics',
			image: '/images/img3.png'
		},
		{
			id: 4,
			title: 'Görüntü Sınıflandırma Modeli',
			author: 'Zeynep Kaya',
			likes: 178,
			category: 'Machine Learning',
			image: '/images/img4.png'
		},
		{
			id: 5,
			title: 'Yapay Zeka ile Müzik Oluşturma',
			author: 'Ahmet Yıldız',
			likes: 134,
			category: 'AI Art',
			image: '/images/img5.png'
		}
	]

	const filteredShowcases =
		activeCategory === 'all' ? showcases : showcases.filter((item) => item.category === activeCategory)

	return (
		<section className="py-16 bg-base-100">
			<div className="container mx-auto">
				<h2 className="text-4xl font-bold text-center mb-8">Topluluk Vitrinimiz</h2>
				<div className="flex justify-center mb-8 space-x-4 overflow-x-auto pb-2">
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setActiveCategory(category)}
							className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
								activeCategory === category ? 'bg-blue-600 text-white' : 'bg-base-200  '
							}`}
						>
							{category.charAt(0).toUpperCase() + category.slice(1)}
						</button>
					))}
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredShowcases.map((item) => (
						<div
							key={item.id}
							className="bg-base-200 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
						>
							<img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2 ">{item.title}</h3>
								<p className=" mb-4">Oluşturan: {item.author}</p>
								<div className="flex justify-between items-center">
									<span className="text-sm flex items-center">
										<svg className="w-4 h-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
											<path
												fillRule="evenodd"
												d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
												clipRule="evenodd"
											/>
										</svg>
										{item.likes}
									</span>
									<Link href={`/showcase/${item.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
										İncele
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="text-center mt-12">
					<Link
						href="/community"
						className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors"
					>
						Topluluğa Katıl ve Projeni Paylaş
					</Link>
				</div>
			</div>
		</section>
	)
}
