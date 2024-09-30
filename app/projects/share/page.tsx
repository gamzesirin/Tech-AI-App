import React from 'react'
import AnimatedShinyText from '../../../features/news/components/ShineText'

const ShareProject: React.FC = () => {
	return (
		<div className="container mx-auto pt-20 max-w-5xl">
			<h1 className="text-4xl font-bold mb-6 ">
				<AnimatedShinyText> Proje Paylaş</AnimatedShinyText>{' '}
			</h1>
			<p className="text-lg text-gray-600 mb-4">Yapay zeka projelerinizi paylaşın ve topluluktan geri bildirim alın!</p>

			{/* Proje Paylaşım Formu */}
			<div className="card shadow-lg p-6 bg-base-200">
				<div className="form-control">
					<input type="text" placeholder="Proje Başlığı" className="input input-bordered mb-4" />
					<textarea
						className="textarea textarea-bordered mb-4"
						placeholder="Projenizi tanımlayın (kullanılan teknoloji, amaç, vb.)"
					></textarea>
					<input type="url" placeholder="Proje URL'si (varsa)" className="input input-bordered mb-4" />
					<button className="btn btn-primary">Proje Paylaş</button>
				</div>
			</div>

			{/* Paylaşılan Projeler */}
			<div className="mt-8">
				<h2 className="text-2xl font-bold mb-4">Paylaşılan Projeler</h2>
				<div className="space-y-4">
					{/* Proje Kartı */}
					<div className="card shadow-lg">
						<div className="card-body bg-base-200">
							<h2 className="card-title text-xl">Yapay Zeka Tabanlı Görüntü İşleme Projesi</h2>
							<p>Makine öğrenmesi kullanarak görüntü işleme için geliştirdiğim proje.</p>
							<a href="#" className="text-primary underline">
								Proje URL'si
							</a>
						</div>
					</div>
					<div>
						{/* Proje Kartı */}
						<div className="card shadow-lg">
							<div className="card-body bg-base-200">
								<h2 className="card-title text-xl">Yapay Zeka Tabanlı Görüntü İşleme Projesi</h2>
								<p>Makine öğrenmesi kullanarak görüntü işleme için geliştirdiğim proje.</p>
								<a href="#" className="text-primary underline">
									Proje URL'si
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ShareProject
