import { notFound } from 'next/navigation'
import Image from 'next/image'
import AnimatedShinyText from '../../../features/news/components/ShineText'

const news = [
	{
		id: 1,
		title: 'OpenAI GPT-4 Teknolojisini Duyurdu',
		date: '30 Eylül 2024',
		author: 'Ahmet Yılmaz',
		content: `
            <p>OpenAI'nin en son yapay zeka modeli GPT-4, bugün resmi olarak duyuruldu. Yapay zeka ve makine öğrenimi alanlarında çalışan uzmanlar, bu yeni modelin potansiyel etkilerini 'devrim niteliğinde' olarak nitelendiriyor.</p>
            
            <p>GPT-4, önceki modellere kıyasla daha geniş bir bağlam anlama yeteneğine sahip ve çok daha karmaşık görevleri yerine getirebiliyor. Yeni model, doğal dil işleme, kod yazma, görsel tanıma ve çoklu görev yetenekleriyle öne çıkıyor.</p>
            
            <h2>GPT-4'ün Öne Çıkan Özellikleri</h2>
            <ul>
                <li>Gelişmiş dil anlama ve üretme yeteneği</li>
                <li>Çoklu dil desteği ve çeviri kalitesinde artış</li>
                <li>Karmaşık problemleri çözme ve analiz etme yeteneği</li>
                <li>Görsel girdileri anlama ve yorumlama kabiliyeti</li>
            </ul>
            
            <p>OpenAI CEO'su Sam Altman, "GPT-4 ile yapay zeka teknolojisinde yeni bir çağ başlıyor. Bu model, insanların çalışma ve öğrenme şekillerini kökten değiştirecek potansiyele sahip" açıklamasında bulundu.</p>
            
            <p>Uzmanlar, GPT-4'ün eğitim, sağlık, bilimsel araştırma ve iş dünyasında geniş uygulama alanları bulacağını öngörüyor. Ancak, bu güçlü teknolojinin etik kullanımı konusundaki tartışmalar da devam ediyor.</p>
        `,
		imageUrl: '/api/placeholder/800/400'
	},
	{
		id: 2,
		title: "Google'dan Yeni Quantum Bilgisayar",
		date: '29 Eylül 2024',
		author: 'Zeynep Kaya',
		content: `
            <p>Google, yeni quantum bilgisayarı 'Quantum Apex' ile teknoloji dünyasını bir kez daha sarstı. Şirket, bu yeni cihazın saniyeler içinde klasik süperbilgisayarların binlerce yılda çözemeyeceği problemleri çözebileceğini iddia ediyor.</p>
            
            <p>Quantum Apex, kuantum üstünlüğü iddiasıyla tanıtılan ilk cihaz olma özelliğini taşıyor. Google'ın CEO'su Sundar Pichai, "Quantum Apex, kuantum hesaplama alanında çığır açan bir teknoloji. Bu cihaz, klasik bilgisayarların ulaşamayacağı zor problemleri çözmek için tasarlandı" dedi.</p>
            
            <h2>Quantum Apex'in Özellikleri</h2>
            <ul>
                <li>Qubit sayısında rekor seviyede artış</li>
                <li>Yüksek hızda ve düşük enerji tüketiminde çalışma</li>
                <li>Kriptografi ve kimya alanlarında uygulama potansiyeli</li>
                <li>İleri seviye veri analizi ve simülasyon yetenekleri</li>
            </ul>
            
            <p>Quantum Apex, kuantum bilgisayar teknolojisinin gelecekteki uygulamaları konusunda büyük umutlar yaratıyor. Ancak, bu teknolojinin günlük hayata entegrasyonu ve geniş çapta kullanımı için daha fazla araştırma ve geliştirme gerekiyor.</p>
        `,
		imageUrl: '/api/placeholder/800/400'
	},
	{
		id: 3,
		title: 'AI Destekli Sağlık Uygulamaları Artıyor',
		date: '28 Eylül 2024',
		author: 'Elif Demir',
		content: `
            <p>Sağlık sektöründe yapay zeka kullanımı hızla artıyor. Son araştırmalar, AI destekli uygulamaların bazı kanser türlerini insan doktorlardan daha erken ve daha doğru teşhis edebildiğini gösteriyor.</p>
            
            <p>Yapay zeka teknolojileri, tıbbi teşhis ve tedavi alanlarında devrim yaratıyor. AI destekli uygulamalar, doktorlara daha hızlı ve doğru teşhis koyma imkanı sağlıyor. Bu da hastaların daha hızlı ve etkili bir şekilde tedavi edilmesini sağlıyor.</p>
            
            <h2>AI Destekli Sağlık Uygulamalarının Faydaları</h2>
            <ul>
                <li>Hızlı ve doğru teşhis imkanı</li>
                <li>Tedavi planlarının optimize edilmesi</li>
                <li>Hastaların sağlık verilerinin analiz edilmesi</li>
                <li>İlaç keşfi ve geliştirme süreçlerinde iyileştirmeler</li>
            </ul>
            
            <p>Uzmanlar, yapay zeka teknolojilerinin sağlık sektöründeki etkilerinin giderek artacağını ve hastaların yaşam kalitesini olumlu yönde etkileyeceğini belirtiyor. Ancak, bu teknolojilerin etik ve gizlilik konuları da dikkate alınmalıdır.</p>
        `,
		imageUrl: '/api/placeholder/800/400'
	}
]

export default function NewsDetailPage({ params }: { params: { id: string } }) {
	const newsItem = news.find((item) => item.id === parseInt(params.id))

	if (!newsItem) {
		notFound()
	}

	return (
		<article className="container mx-auto  max-w-5xl">
			<h1 className="text-4xl font-bold mb-4 mt-24">
				<AnimatedShinyText>{newsItem.title}</AnimatedShinyText>
			</h1>
			<div className="text-gray-600 mb-4">
				<span>{newsItem.date}</span> • <span>{newsItem.author}</span>
			</div>
			<Image
				src={newsItem.imageUrl}
				alt={newsItem.title}
				width={800}
				height={400}
				className="w-full h-auto rounded-lg mb-6"
			/>
			<div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: newsItem.content }} />
		</article>
	)
}
