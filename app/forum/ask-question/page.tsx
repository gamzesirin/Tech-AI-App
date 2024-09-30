import React from 'react'
import AnimatedShinyText from '../../../features/news/components/ShineText'

const AskQuestion: React.FC = () => {
	return (
		<div className="container mx-auto pt-20 max-w-5xl">
			<h1 className="text-4xl font-bold mb-6 ">
				<AnimatedShinyText>Teknik Soru Sor</AnimatedShinyText>{' '}
			</h1>
			<p className="text-lg text-gray-600 mb-4">
				AI ve teknoloji ile ilgili sorularınızı burada sorun ve topluluktan yardım alın!
			</p>

			{/* Soru Sorma Formu */}
			<div className="card shadow-lg p-6 bg-base-200">
				<div className="form-control">
					<input type="text" placeholder="Soru Başlığı" className="input input-bordered mb-4" />
					<textarea className="textarea textarea-bordered mb-4" placeholder="Sorunuzu detaylıca yazın"></textarea>
					<button className="btn btn-primary">Soruyu Sor</button>
				</div>
			</div>

			{/* Önceki Sorular */}
			<div className="mt-8">
				<h2 className="text-2xl font-bold mb-4">Son Sorular</h2>
				<div className="space-y-4">
					{/* Soru Kartı */}
					<div className="card shadow-lg bg-base-200">
						<div className="card-body">
							<h2 className="card-title text-xl">Makine Öğrenmesi Modelini Nasıl Optimize Ederim?</h2>
							<p>Makine öğrenmesi modelimde yüksek overfitting var. Bu sorunu nasıl çözebilirim?</p>
							<button className="btn btn-primary mt-4">Cevapla</button>
						</div>
					</div>
					<div className="card shadow-lg bg-base-200">
						<div className="card-body">
							<h2 className="card-title text-xl">Yapay Zeka ile İlgili En İyi Kaynaklar Nelerdir?</h2>
							<p>Yapay zeka öğrenmeye yeni başlayanlar için en iyi kaynaklar hangileridir?</p>
							<button className="btn btn-primary mt-4">Cevapla</button>
						</div>
					</div>

					<div className="card shadow-lg bg-base-200">
						<div className="card-body">
							<h2 className="card-title text-xl">AI Neden Bu Kadar Önemli?</h2>
							<p>AI ve makine öğrenmesi neden günümüzde bu kadar popüler ve önemli hale geldi?</p>
							<button className="btn btn-primary mt-4">Cevapla</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AskQuestion
