import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'
import AnimatedShinyText from '../../features/news/components/ShineText'

interface NewsItem {
	id: number
	title: string
	date: string
	author: string
	excerpt: string
	content: string
}

const news = [
	{
		id: 1,
		title: 'OpenAI GPT-4 Teknolojisini Duyurdu',
		date: '30 Eylül 2024',
		author: 'Ahmet Yılmaz',
		excerpt:
			"OpenAI, yapay zeka alanında çığır açan yeni modeli GPT-4'ü duyurdu. Bu model, önceki versiyonlara göre daha gelişmiş doğal dil işleme yetenekleri sunuyor.",
		content:
			"OpenAI'nin en son yapay zeka modeli GPT-4, bugün resmi olarak duyuruldu. Yapay zeka ve makine öğrenimi alanlarında çalışan uzmanlar, bu yeni modelin potansiyel etkilerini 'devrim niteliğinde' olarak nitelendiriyor. GPT-4, önceki modellere kıyasla daha geniş bir bağlam anlama yeteneğine sahip ve çok daha karmaşık görevleri yerine getirebiliyor..."
	},
	{
		id: 2,
		title: "Google'dan Yeni Quantum Bilgisayar",
		date: '29 Eylül 2024',
		author: 'Zeynep Kaya',
		excerpt:
			'Google, quantum üstünlüğü iddiasıyla yeni quantum bilgisayarını tanıttı. Bu cihaz, klasik süperbilgisayarların çözemeyeceği problemleri çözme potansiyeli taşıyor.',
		content:
			"Google, yeni quantum bilgisayarı 'Quantum Apex' ile teknoloji dünyasını bir kez daha sarstı. Şirket, bu yeni cihazın saniyeler içinde klasik süperbilgisayarların binlerce yılda çözemeyeceği problemleri çözebileceğini iddia ediyor. Bu gelişme, kriptografi, ilaç keşfi ve iklim modellemesi gibi alanlarda büyük ilerlemelere yol açabilir..."
	},
	{
		id: 3,
		title: 'AI Destekli Sağlık Uygulamaları Artıyor',
		date: '28 Eylül 2024',
		author: 'Elif Demir',
		excerpt:
			'Yapay zeka teknolojileri, tıbbi teşhis ve tedavi alanlarında devrim yaratıyor. AI destekli uygulamalar, doktorlara daha hızlı ve doğru teşhis koyma imkanı sağlıyor.',
		content:
			'Sağlık sektöründe yapay zeka kullanımı hızla artıyor. Son araştırmalar, AI destekli uygulamaların bazı kanser türlerini insan doktorlardan daha erken ve daha doğru teşhis edebildiğini gösteriyor. Bu gelişmeler, hastaların tedaviye daha erken başlamasını sağlayarak hayat kurtarma potansiyeli taşıyor...'
	}
]

export default function NewsPage() {
	return (
		<div className="container mx-auto p-4 max-w-5xl">
			<h1 className="text-4xl font-bold mb-12 text-center mt-20">
				<AnimatedShinyText>Teknoloji Haber Bülteni</AnimatedShinyText>
			</h1>
			<div className="space-y-12">
				{news.map((item) => (
					<article key={item.id} className=" pb-8">
						<h2 className="text-3xl font-semibold mb-2">{item.title}</h2>
						<div className="text-gray-600 mb-4">
							<span>{item.date}</span> • <span>{item.author}</span>
						</div>
						<p className="text-xl mb-4">{item.excerpt}</p>
						<p className="mb-4">{item.content}</p>
						<Link href={`/news/${item.id}`} className="btn btn-primary btn-outline group">
							<span>Haberin Devamını Oku</span>
							<ArrowRightIcon className="ml-1 w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
						</Link>
					</article>
				))}
			</div>
		</div>
	)
}
