'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ProgressBar from '../components/ProgressBar';
import { useOrder } from '../context/OrderContext';

const coffeeCategories = [
	{
		title: 'ESPRESSO',
		items: [
			{ name: 'Pre-Ground Espresso', image: '/coffeemachine.jpg' },
			{ name: 'Wholebean Espresso', image: '/coffeemachine.jpg' },
			{ name: 'Bean to Cup', image: '/coffeemachine.jpg' },
		],
	},
	{
		title: 'FILTER',
		items: [
			{ name: 'Batch Brew', image: '/coffeemachine.jpg' },
			{ name: 'Drip', image: '/coffeemachine.jpg' },
			{ name: 'Cafetiere', image: '/coffeemachine.jpg' },
		],
	},
	{
		title: 'PODS',
		items: [{ name: 'Nespresso Compatible Machine', image: '/coffeemachine.jpg' }],
	},
];

function CoffeeBrewingSelectionContent() {
	const router = useRouter();
	const { selectedCoffee, setSelectedCoffee } = useOrder();
	const searchParams = useSearchParams();

	const [companyName, setCompanyName] = useState('');
	const [openSections, setOpenSections] = useState(coffeeCategories.map(() => true));

	useEffect(() => {
		const companyNameFromParams = searchParams.get('companyName');
		if (companyNameFromParams) {
			setCompanyName(companyNameFromParams);
		}
	}, [searchParams]);

	const toggleSection = (index: number) => {
		setOpenSections((prev) => prev.map((open, i) => (i === index ? !open : open)));
	};

	const selectItem = (itemName: string) => {
		setSelectedCoffee(itemName);
		router.push('/step-5');
	};

	return (
		<div className='min-h-screen bg-white flex flex-col items-center pb-6'>
			<ProgressBar step={3} />
			<h2 className='text-center text-2xl md:text-3xl font-bold mb-4 mt-10 text-[#BD1521]'>
				How do you brew your coffee at <span className='underline decoration-[#BD1521]'>{companyName}</span>?
			</h2>

			{coffeeCategories.map((category, index) => (
				<div key={index} className='w-full max-w-7xl mb-6'>
					<div
						className='flex justify-between items-center bg-[#BD1521] text-white px-6 py-4 cursor-pointer rounded-t-lg shadow-md hover:brightness-110 transition'
						onClick={() => toggleSection(index)}>
						<h3 className='text-lg md:text-xl font-semibold'>{category.title}</h3>
						{openSections[index] ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
					</div>

					{openSections[index] && (
						<div
							className='grid gap-6 p-6 bg-[#F2F2F2] shadow-inner rounded-b-lg'
							style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
							{category.items.map((item, itemIndex) => (
								<div
									key={itemIndex}
									onClick={() => selectItem(item.name)}
									className={`flex flex-col items-center border-2 p-6 rounded-xl cursor-pointer transition-all w-full shadow-sm hover:shadow-lg hover:scale-105 ${
										selectedCoffee === item.name
											? 'bg-[#BD1521] text-white border-[#BD1521]'
											: 'bg-white text-[#BD1521] border-[#BD1521] hover:bg-[#BD1521] hover:text-white'
									}`}>
									<Image
										src={item.image}
										alt={item.name}
										width={280}
										height={200}
										className='rounded-lg object-cover border border-[#BD1521]'
									/>
									<h4 className='mt-4 text-center text-lg font-semibold'>{item.name}</h4>
								</div>
							))}
						</div>
					)}
				</div>
			))}
		</div>
	);
}

export default function CoffeeBrewingSelection() {
	return (
		<Suspense fallback={<div className='text-center mt-10 text-[#BD1521]'>Loading...</div>}>
			<CoffeeBrewingSelectionContent />
		</Suspense>
	);
}
