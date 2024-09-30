'use client'
import { useState } from 'react'

const FAQItem = ({ question, answer }: any) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className="border-b border-base-100 py-4">
			<button className="flex justify-between items-center w-full text-left" onClick={() => setIsOpen(!isOpen)}>
				<span className="text-lg font-medium">{question}</span>
				<span className="text-2xl">{isOpen ? '−' : '+'}</span>
			</button>
			{isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
		</div>
	)
}

export default function FAQ() {
	const faqs = [
		{
			question: 'Tech AI platformu nedir ve nasıl kullanılır?',
			answer:
				'Tech AI, yapay zeka ve ileri teknolojiler hakkında güncel bilgiler sunan bir platformdur. Kullanıcılar, en son AI haberlerini okuyabilir, forum tartışmalarına katılabilir ve AI demolarını deneyimleyebilir. Platformu kullanmak için ücretsiz hesap oluşturabilir ve hemen içeriklere erişmeye başlayabilirsiniz.'
		},
		{
			question: "Tech AI'da sunulan AI demoları nelerdir?",
			answer:
				'Tech AI, çeşitli AI teknolojilerini deneyimlemenize olanak tanıyan demolar sunar. Bunlar arasında doğal dil işleme, görüntü tanıma, ses sentezi ve makine öğrenimi modelleri bulunmaktadır. Demolar, kullanıcıların AI teknolojilerini pratik olarak anlamalarına yardımcı olmak için tasarlanmıştır.'
		},
		{
			question: 'Tech AI topluluğuna nasıl katılabilirim ve katkıda bulunabilirim?',
			answer:
				'Tech AI topluluğuna katılmak için platformda ücretsiz bir hesap oluşturmanız yeterlidir. Forumlarda tartışmalara katılabilir, kendi deneyimlerinizi paylaşabilir ve diğer üyelerle etkileşimde bulunabilirsiniz. Ayrıca, blog yazıları yazarak veya kendi AI projelerinizi paylaşarak platforma katkıda bulunabilirsiniz.'
		}
	]

	return (
		<section className="py-8 bg-base-100">
			<div className="">
				<h2 className="text-3xl font-bold text-center mb-8">Sıkça Sorulan Sorular</h2>
				<div className="container max-w-5xl mx-auto">
					{faqs.map((faq, index) => (
						<FAQItem key={index} question={faq.question} answer={faq.answer} />
					))}
				</div>
			</div>
		</section>
	)
}
