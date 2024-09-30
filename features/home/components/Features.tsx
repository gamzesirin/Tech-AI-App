export default function Features() {
	const features = [
		{ title: 'En Son AI Haberleri', description: 'Yapay zeka dünyasındaki en güncel gelişmeleri takip edin.' },
		{ title: 'Teknoloji Trendleri', description: 'Gelecek teknolojileri ve trendleri keşfedin.' },
		{ title: 'AI Çözümleri', description: 'Sektöre özel AI çözümlerini inceleyin.' },
		{ title: 'Topluluk Tartışmaları', description: 'AI meraklıları ile fikir alışverişinde bulunun.' }
	]

	return (
		<section className="py-8 bg-gradient-to-b from-base-200 to-base-100">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-4xl font-bold text-center mb-4">Platformumuzun Özellikleri</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{features.map((feature, index) => (
						<div
							key={index}
							className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
						>
							<div className="card-body text-center relative z-10">
								<h3 className="card-title justify-center text-2xl mb-4 group-hover:text-primary transition-colors duration-300">
									{feature.title}
								</h3>
								<p className="text-base-content/80">{feature.description}</p>
							</div>
							<div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
