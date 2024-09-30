import React from 'react'

const Footer = () => {
	return (
		<footer className="bg-base-100 text-gray-600 py-6">
			<div className="max-w-5xl mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<a href="#" className="text-lg font-bold text-primary">
						TECH AI
					</a>
					<div className="flex space-x-4 mt-4 md:mt-0">
						<a href="#" className="hover:underline">
							Haberler
						</a>
						<a href="#" className="hover:underline">
							Topluluk
						</a>
						<a href="#" className="hover:underline">
							İletişim
						</a>
					</div>
				</div>

				<div className="border-t border-gray-300 mt-4 pt-4 text-sm">
					<div className="flex flex-col md:flex-row justify-between">
						<div className="space-x-4 flex flex-wrap">
							<a href="#" className="hover:underline">
								Aday Üyelik Aydınlatma Metni
							</a>
							<a href="#" className="hover:underline">
								Platform Üyelik Sözleşmesi
							</a>
							<a href="#" className="hover:underline">
								Çerez Politikası
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
