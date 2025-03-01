'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import ProgressBar from '../components/ProgressBar';
import { useOrder } from '../context/OrderContext';
import { IoIosArrowBack } from 'react-icons/io';

function Office3Component() {
	const { companyName, setCompanyName, region, setRegion } = useOrder();
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [touched, setTouched] = useState(false);

	const searchParams = useSearchParams();
	const router = useRouter();

	useEffect(() => {
		const companyNameFromParams = searchParams.get('companyName');
		if (companyNameFromParams) {
			setCompanyName(companyNameFromParams);
		}
	}, [searchParams, setCompanyName]);

	const validateRegion = (value: string) => {
		if (!value.trim()) return 'Region is required';
		if (value.length < 2) return 'Region must be at least 2 characters long';
		if (!/^[a-zA-Z\s-]+$/.test(value)) return 'Region should only contain letters, spaces, and hyphens';
		return '';
	};

	const handleRegionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRegion(e.target.value);
		setTouched(true);
		if (error) setError('');
	};

	const handleNext = async () => {
		setTouched(true);
		const validationError = validateRegion(region);
		if (validationError) {
			setError(validationError);
			return;
		}

		try {
			setIsLoading(true);
			await new Promise((resolve) => setTimeout(resolve, 500));
			router.push('../hospital-step-4');
		} catch (err) {
			console.error('Error in handleNext:', err);
			setError('An error occurred. Please try again.');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className='relative min-h-screen bg-white flex flex-col items-center pb-6'>
			<IoIosArrowBack
				size={30}
				className='absolute top-[20%] left-4 sm:top-20 sm:left-6 md:top-20 md:left-8 lg:top-20 lg:left-10 hover:bg-[#f8d7da] p-1 rounded-full transition-colors'
				onClick={() => router.push('/hospital-step-2')}
			/>
			<ProgressBar step={2} />
			<h2 className='text-center text-2xl md:text-3xl font-bold mb-4 mt-10'>
				Where is <span className='text-[#BD1521]'>{companyName}</span> located?
			</h2>

			<div className='w-full max-w-md px-4 mt-10'>
				<div className='mb-6'>
					<p className='text-[#BD1521] text-sm uppercase mb-2 mt-5'>REGION</p>
					<div className='relative'>
						<input
							type='text'
							value={region}
							onChange={handleRegionChange}
							placeholder='Enter region name'
							className={`w-full p-2 border-b ${
								error && touched ? 'border-[#BD1521]' : 'border-gray-300'
							} focus:outline-none focus:border-[#BD1521] transition-colors`}
							disabled={isLoading}
						/>
						{region && !error && <span className='absolute right-2 top-2 text-green-600'>✓</span>}
					</div>
					{error && touched && <p className='text-[#BD1521] text-sm mt-1'>{error}</p>}
				</div>

				<button
					onClick={handleNext}
					disabled={isLoading}
					className={`w-full mt-10 py-3 px-4 rounded font-medium uppercase transition-transform ${
						isLoading
							? 'bg-gray-200 text-gray-500 cursor-not-allowed'
							: 'bg-[#BD1521] text-white hover:bg-[#a0121c] hover:scale-[1.02] active:scale-[0.98]'
					}`}>
					{isLoading ? 'Processing...' : 'NEXT'}
				</button>
			</div>
		</div>
	);
}

export default function Office3() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Office3Component />
		</Suspense>
	);
}
