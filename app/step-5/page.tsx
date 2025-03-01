'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ProgressBar from '../components/ProgressBar';

const coffeeOptions = [
	{
		name: 'House Espresso',
		price: '£17.95 Per Kg',
		description:
			'Perfect for upping your regular coffee game. Receive the same chocolaty rich, speciality-grade coffee blend every delivery.',
		tag: 'Blended Coffee',
		icon: '\ud83c\udf0d',
		image:
			'https://res.cloudinary.com/pactcoffee/image/upload/f_auto,q_auto/website-b2b/UploadedCMS/2022/Group_1187.png',
	},
	{
		name: 'Bourbon Cream Espresso',
		price: '£19.95 Per Kg',
		description:
			'Our Customer Favourite. A mouthwatering blend with a dark roast profile and showstopping tasting notes of bourbon cream biscuits.',
		tag: 'Brazil & Colombia',
		icon: '\ud83c\udde7\ud83c\uddf7 \ud83c\udde8\ud83c\uddf4',
		image:
			'https://res.cloudinary.com/pactcoffee/image/upload/f_auto,q_auto/website-b2b/UploadedCMS/2022/Group_1187.png',
		popular: true,
	},
	{
		name: 'Variety Espresso',
		price: '£19.95 Per Kg',
		description:
			'The best way to sample coffees grown in all the origins Pact sources from. An ever-changing menu featuring the best of our seasonal coffees.',
		tag: 'Multiple Origins',
		icon: '\ud83c\udde7\ud83c\uddf7 \ud83c\udde8\ud83c\uddf4 \ud83c\uddf5\ud83c\uddf7 \ud83c\uddf0\ud83c\uddf7 \ud83c\udde8\ud83c\uddf1',
		image:
			'https://res.cloudinary.com/pactcoffee/image/upload/f_auto,q_auto/website-b2b/UploadedCMS/2022/Group_1187.png',
	},
];

export default function CoffeeSelection() {
	const router = useRouter();
	const handleNextClick = () => {
		router.push('step-6');
	};

	return (
		<div className='pb-12 text-center'>
			<ProgressBar step={4} />
			<h2 className='text-3xl font-bold text-red-700 mt-10'>Choose Your Espresso Coffee</h2>
			<p className='text-gray-600 mt-2'>Roasted and ground specifically for espresso machines</p>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-7xl mx-auto'>
				{coffeeOptions.map((coffee, index) => (
					<div
						key={index}
						className='bg-red-700 text-white p-6 rounded-lg shadow-md relative flex flex-col items-center'>
						<Image src={coffee.image} alt={coffee.name} width={100} height={100} className='mb-4' />
						{coffee.popular && (
							<span className='absolute top-4 right-4 bg-yellow-500 text-sm font-bold px-3 py-1 rounded-full'>
								MOST POPULAR
							</span>
						)}
						<h3 className='text-xl font-bold'>{coffee.name}</h3>
						<p className='text-lg mt-2'>{coffee.price}</p>
						<p className='flex items-center justify-center mt-2 text-gray-300'>
							<span className='text-2xl mr-2'>{coffee.icon}</span> {coffee.tag}
						</p>
						<p className='text-gray-300 mt-4 text-sm'>{coffee.description}</p>
						<button
							onClick={handleNextClick}
							className='mt-6 w-full bg-white text-red-700 text-lg font-bold py-3 rounded-md hover:bg-gray-100 transition'>
							CHOOSE PLAN &gt;
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
