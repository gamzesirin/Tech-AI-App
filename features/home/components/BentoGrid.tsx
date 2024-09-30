import React from 'react'
import { BrainCircuitIcon, SparklesIcon, CodeIcon, DatabaseIcon } from 'lucide-react'

interface Feature {
	Icon: React.ElementType
	name: string
	description: string
	href: string
	cta: string
	className: string
}

const features: Feature[] = [
	{
		Icon: DatabaseIcon,
		name: 'Big Data Analytics',
		description: 'Değerli bilgiler çıkarmak için büyük veri setlerini işleyin ve analiz edin.',
		href: '/',
		cta: 'Daha fazla bilgi',
		className: 'lg:col-start-1'
	},
	{
		Icon: BrainCircuitIcon,
		name: 'Neural Networks',
		description: 'Gelişmiş AI işleme için en son sinir ağı mimarileri.',
		href: '/',
		cta: 'Keşfet',
		className: 'lg:row-span-3 lg:col-start-2'
	},

	{
		Icon: SparklesIcon,
		name: 'Natural Language Processing',
		description: 'İnsan benzeri metinleri anlamak ve oluşturmak için gelişmiş NLP yetenekleri.',
		href: '/',
		cta: 'Daha fazla bilgi',
		className: 'lg:row-span-2'
	},
	{
		Icon: CodeIcon,
		name: 'AutoML',
		description: 'AI model performansını optimize etmek için otomatik makine öğrenimi.',
		href: '/',
		cta: 'Keşfet',
		className: 'lg:col-start-1 lg:row-span-2'
	},
	{
		Icon: DatabaseIcon,
		name: 'Big Data Analytics',
		description: 'Değerli bilgiler çıkarmak için büyük veri setlerini işleyin ve analiz edin.',
		href: '/',
		cta: 'Daha fazla bilgi',
		className: 'lg:col-start-3'
	}
]

const BentoCard: React.FC<Feature> = ({ Icon, name, description, href, cta, className }) => (
	<div className={`card bg-base-200 shadow-xl ${className} `}>
		<div className="card-body">
			<Icon className="w-8 h-8 text-primary" />
			<h2 className="card-title">{name}</h2>
			<p>{description}</p>
			<div className="card-actions justify-end">
				<a href={href} className="btn btn-primary">
					{cta}
				</a>
			</div>
		</div>
	</div>
)

const BentoGrid: React.FC = () => (
	<div className="grid gap-4 p-4 lg:grid-cols-3 lg:grid-rows-3 mt-10">
		{features.map((feature) => (
			<BentoCard key={feature.name} {...feature} />
		))}
	</div>
)

export default function AITechBentoDemo() {
	return <BentoGrid />
}
