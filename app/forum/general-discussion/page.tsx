import React from 'react'
import AnimatedShinyText from '../../../features/news/components/ShineText'

const GeneralDiscussion: React.FC = () => {
	return (
		<div className="container mx-auto pt-20 max-w-5xl">
			<h1 className="text-4xl font-bold mb-6">
				{' '}
				<AnimatedShinyText>Genel Tartışma</AnimatedShinyText>{' '}
			</h1>
			<p className="text-lg text-gray-600 mb-4">
				Yapay zeka, teknoloji ve en son yenilikler hakkında konuşun. Sorularınızı sorun, görüşlerinizi paylaşın!
			</p>

			<div className="space-y-4">
				<div className="card shadow-lg">
					<div className="card-body bg-base-200">
						<h2 className="card-title text-xl">GPT-4.5 ve Doğal Dil İşlemede Gelecek</h2>
						<p>Yeni duyurulan GPT-4.5 hakkında ne düşünüyorsunuz? Kullanım alanlarını tartışalım.</p>
						<div className="card-actions justify-end">
							<button className="btn btn-primary text-primary-content">Yorum Yap</button>
						</div>
					</div>
				</div>

				<div className="card shadow-lg">
					<div className="card-body bg-base-200">
						<h2 className="card-title text-xl">Otonom Araç Teknolojisinin Geleceği</h2>
						<p>Otonom araçlarla ilgili son gelişmeler ve zorluklar. Sizce daha ne kadar yol kat edilmeli?</p>
						<div className="card-actions justify-end">
							<button className="btn btn-primary text-primary-content">Yorum Yap</button>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-8">
				<h3 className="text-2xl font-bold mb-4">Yeni Bir Tartışma Başlat</h3>
				<div className="card shadow-lg p-6 bg-base-200">
					<div className="form-control">
						<input type="text" placeholder="Tartışma Başlığı" className="input input-bordered mb-4" />
						<textarea className="textarea textarea-bordered" placeholder="Tartışma konusunu yazın"></textarea>
						<button className="btn btn-primary mt-4">Tartışmayı Başlat</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GeneralDiscussion
