import Link from 'next/link'

export default function NewsFeed() {
	const news = [
		{
			id: 1,
			title: 'OpenAI GPT-4 Teknolojisini Duyurdu',
			excerpt: 'Yapay zeka alanında çığır açan yeni model tanıtıldı.'
		},
		{
			id: 2,
			title: "Google'dan Yeni Quantum Bilgisayar",
			excerpt: 'Quantum üstünlüğü iddiası ile yeni cihaz piyasaya sürüldü.'
		},
		{
			id: 3,
			title: 'AI Destekli Sağlık Uygulamaları Artıyor',
			excerpt: 'Yapay zeka, tıbbi teşhis ve tedavide devrim yaratıyor.'
		}
	]

	return (
		<section className="bg-base-100 mt-10">
			<div className="container mx-auto mb-4">
				<h2 className="text-3xl font-bold text-center mb-4">Son Haberler</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{news.map((item) => (
						<div key={item.id} className="bg-base-200 rounded-lg p-6 shadow-md">
							<h3 className="text-xl font-semibold mb-2">{item.title}</h3>
							<p className="text-gray-600 mb-4">{item.excerpt}</p>
							<Link href={`/news/${item.id}`} className="text-blue-600 hover:underline">
								Devamını Oku
							</Link>
						</div>
					))}
				</div>
				<div className="text-center mt-8">
					<Link href="/news" className="btn btn-primary">
						Tüm Haberleri Gör
					</Link>
				</div>
			</div>
		</section>
	)
}
