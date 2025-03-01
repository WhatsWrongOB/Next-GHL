'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import ProgressBar from '../components/ProgressBar';
import { useOrder } from '../context/OrderContext';
import { IoIosArrowBack } from 'react-icons/io';

function Office3Component() {
	const { companyName, setCompanyName, region, setRegion } = useOrder(); // ✅ Use context
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [touched, setTouched] = useState(false);

	const searchParams = useSearchParams();
	const router = useRouter();

	// Get company name from URL params and set it in context
	useEffect(() => {
		const companyNameFromParams = searchParams.get('companyName');
		if (companyNameFromParams) {
			setCompanyName(companyNameFromParams); // ✅ Update context state
		}
	}, [searchParams, setCompanyName]);

	const validateRegion = (value: string) => {
		if (!value.trim()) return 'Region is required';
		if (value.length < 2) return 'Region must be at least 2 characters long';
		if (!/^[a-zA-Z\s-]+$/.test(value)) return 'Region should only contain letters, spaces, and hyphens';
		return '';
	};

	const handleRegionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRegion(e.target.value); // ✅ Directly update context
		setTouched(true);
		if (error) setError(''); // Clear error on typing
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
			await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate processing

			router.push(`/office-4?companyName=${encodeURIComponent(companyName)}`);
		} catch (err) {
			console.error('Error in handleNext:', err);
			setError('An error occurred. Please try again.');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className='relative min-h-screen bg-white flex flex-col items-center pb-6'>
			<ProgressBar step={2} />
			<IoIosArrowBack
				size={30}
				className='
    absolute 
    top-[30%] left-4
    sm:top-20 sm:left-6
    md:top-20 md:left-8
    lg:top-20 lg:left-10
    hover:bg-gray-100 
    p-1 rounded-full 
    transition-colors
  '
				onClick={() => router.push('/step-2')}
			/>

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
								error && touched ? 'border-red-500' : 'border-gray-300'
							} focus:outline-none focus:border-[text-[#BD1521]transition-colors`}
							disabled={isLoading}
						/>
						{region && !error && <span className='absolute right-2 top-2 text-green-500'>✓</span>}
					</div>
					{error && touched && <p className='text-red-500 text-sm mt-1'>{error}</p>}
				</div>

				<button
					onClick={handleNext}
					disabled={isLoading}
					className={`w-full mt-10 bg-[#BD1521] text-white py-3 px-4 rounded 
            hover:bg-[#BD1521 transform hover:scale-[1.02] 
            active:scale-[0.98] disabled:opacity-50`}>
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
