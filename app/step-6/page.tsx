'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '../../public/coffee_bag_light.svg';
import ProgressBar from '../components/ProgressBar';
import { useOrder } from '../context/OrderContext';

interface CoffeeOption {
	kg: number;
	days: number;
}

const CoffeeSelector = () => {
	const router = useRouter();
	const { setCoffeeQuantity } = useOrder(); // Use global state

	const [value, setValue] = useState(1);

	const coffeeOptions: CoffeeOption[] = [
		...Array.from({ length: 10 }, (_, i) => ({ kg: i + 1, days: 28 })),
		{ kg: 6, days: 14 },
		{ kg: 7, days: 14 },
		{ kg: 8, days: 14 },
		{ kg: 9, days: 14 },
		{ kg: 10, days: 14 },
		{ kg: 6, days: 7 },
		{ kg: 7, days: 7 },
		{ kg: 8, days: 7 },
		{ kg: 9, days: 7 },
		{ kg: 10, days: 7 },
	];

	const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(Number(event.target.value));
	};

	const calculateBackground = () => {
		const percentage = ((value - 1) / (coffeeOptions.length - 1)) * 100;
		return `linear-gradient(to right, #BD1521 ${percentage}%, #E5E7EB ${percentage}%)`;
	};

	const currentOption = coffeeOptions[value - 1];

	const handleNextClick = () => {
		// Save selected coffee quantity to global state
		setCoffeeQuantity(currentOption);

		// Navigate to Order Summary
		router.push('/ordersummary');
	};

	return (
		<div className='min-h-screen bg-white'>
			<ProgressBar step={5} />

			{/* Header Section */}
			<div className='max-w-7xl mx-auto px-4 py-6'>
				<h1 className='text-xl md:text-2xl lg:text-3xl font-semibold text-[#BD1521] text-center'>
					How much coffee do you need?
				</h1>
			</div>

			{/* Main Content */}
			<div className='max-w-2xl mx-auto px-4 py-8'>
				<div className='bg-white rounded-lg p-6'>
					{/* Office Info Section */}
					<div className='flex items-start space-x-4 mb-8'>
						<div className='w-12 h-12 flex-shrink-0 bg-gray-50 rounded-lg flex items-center justify-center'>
							<svg className='w-6 h-6 text-[#BD1521]' viewBox='0 0 24 24' fill='none' stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
								/>
							</svg>
						</div>
						<div className='flex-grow'>
							<p className='text-[#BD1521] text-lg font-medium mb-1'>For an office with</p>
							<p className='text-[#BD1521] text-lg font-medium'>
								<span className='text-teal-600'>5 people</span> we recommend
							</p>
						</div>
					</div>

					{/* Slider Section */}
					<div className='mb-8'>
						<div className='bg-gray-50 rounded-xl p-6'>
							<input
								type='range'
								min='1'
								max={coffeeOptions.length}
								step='1'
								value={value}
								onChange={handleRangeChange}
								className='w-full h-2 rounded-lg appearance-none cursor-pointer'
								style={{ background: calculateBackground() }}
							/>
						</div>
					</div>

					{/* Recommendation Box */}
					<div className='bg-[#BD1521] rounded-xl p-6 mb-6'>
						<div className='flex items-center space-x-4'>
							<div className='w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0'>
								<Image src={logo} alt='img' />
							</div>
							<div className='text-white'>
								<p className='text-lg font-medium mb-1'>
									<span className='text-teal-200 uppercase'>{currentOption.kg} kg</span> every{' '}
									<span className='text-teal-200 uppercase'>{currentOption.days}</span> days
								</p>
								<p className='uppercase font-medium text-sm'>delivered as 1kg bags</p>
							</div>
						</div>
					</div>

					{/* Next Button */}
					<button
						onClick={handleNextClick}
						className='w-full bg-[#BD1521] text-white py-4 rounded-lg font-medium text-lg hover:bg-[#162c30] transition-colors'>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default CoffeeSelector;
