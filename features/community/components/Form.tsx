import React from 'react'
import AnimatedShinyText from '../../news/components/ShineText'
import Link from 'next/link'

const CommunityForm: React.FC = () => {
	return (
		<div className="container mx-auto pt-24 max-w-5xl">
			{/* Başlık */}
			<div className="text-center mb-8">
				<h1 className="text-4xl font-bold mb-4 ">
					<AnimatedShinyText> Tech AI Topluluğu</AnimatedShinyText>
				</h1>
				<p className="text-lg text-gray-600">Yapay zeka ve teknoloji meraklıları için forum alanı.</p>
			</div>

			{/* Forum Başlıkları */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{/* Forum Kartı */}
				<div className="card shadow-lg">
					<div className="card-body">
						<h2 className="card-title text-xl">Genel Tartışma</h2>
						<p>AI dünyasında son gelişmeleri ve haberleri tartışın.</p>
						<Link href="/forum/general-discussion" className="btn btn-primary mt-4">
							<button>Tartışmaya Katıl</button>
						</Link>
					</div>
				</div>

				{/* Forum Kartı */}
				<div className="card shadow-lg">
					<div className="card-body">
						<h2 className="card-title text-xl">Yapay Zeka Projeleri</h2>
						<p>Projelerinizi paylaşın ve geri bildirim alın.</p>
						<Link href="/projects/share" className="btn btn-primary mt-4">
							<button>Proje Paylaş</button>
						</Link>
					</div>
				</div>

				{/* Forum Kartı */}
				<div className="card shadow-lg">
					<div className="card-body">
						<h2 className="card-title text-xl">Teknik Sorular</h2>
						<p>AI ve teknoloji ile ilgili teknik sorularınızı sorun.</p>
						<Link href="/forum/ask-question" className="btn btn-primary mt-4">
							<button>Sorular Sor</button>
						</Link>
					</div>
				</div>
			</div>

			{/* Topluluk Kuralları */}
			<div className="text-center py-14">
				<h3 className="text-2xl font-bold mb-4 text-secondary">Topluluk Kuralları</h3>
				<ul className=" pl-5 space-y-2 text-gray-700">
					<li>Saygılı ve yapıcı bir dil kullanın.</li>
					<li>Spam içerik paylaşmaktan kaçının.</li>
					<li>Tartışmalarda politik konulara girmeyin.</li>
					<li>Başka üyelerin projelerini olumlu bir şekilde eleştirin.</li>
					<li>Topluluk içinde herhangi bir kişiye karşı saldırganlık veya tacizde bulunmayın.</li>
				</ul>
			</div>
		</div>
	)
}

export default CommunityForm
