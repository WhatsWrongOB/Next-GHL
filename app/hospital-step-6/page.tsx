'use client';
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ProgressBar from '../components/ProgressBar';
import { useOrder } from '../context/OrderContext';
import { IoIosArrowBack } from 'react-icons/io';

interface FormData {
	fullName: string;
	email: string;
	phone: string;
}

function PageContent() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const selected = searchParams.get('selected');
	const { fullName, email, phone, setFullName, setEmail, setPhone } = useOrder();

	const [formData, setFormData] = useState<FormData>({
		fullName,
		email,
		phone,
	});

	const [isValid, setIsValid] = useState({
		fullName: false,
		email: false,
		phone: false,
	});

	const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof FormData) => {
		const value = e.target.value;
		setFormData((prev) => ({ ...prev, [field]: value }));

		setIsValid((prev) => ({
			...prev,
			[field]: field === 'email' ? validateEmail(value) : field === 'phone' ? value.length >= 10 : value.length >= 2,
		}));
	};

	useEffect(() => {
		setFullName(formData.fullName);
		setEmail(formData.email);
		setPhone(formData.phone);
	}, [formData, setFullName, setEmail, setPhone]);

	const handleNext = () => {
		router.push(`/hospital-step-7?selected=${selected}`);
	};

	return (
		<div className='relative'>
			<IoIosArrowBack
				size={30}
				className='
          absolute top-[20%] left-4
          sm:top-20 sm:left-6 md:top-20 md:left-8 lg:top-20 lg:left-10
          hover:bg-[#F2D7D9] p-1 rounded-full transition-colors
          text-[#BD1521]
        '
				onClick={() => router.push('/hospital-step-5')}
			/>
			<ProgressBar step={3.5} />
			<div className='max-w-2xl mx-auto p-8 space-y-8'>
				<h1 className='text-3xl font-bold text-center text-[#BD1521]'>Can we get your details?</h1>

				<div className='space-y-6'>
					<div className='space-y-2'>
						<label className='block text-[#BD1521] font-medium'>
							FULL NAME <span className='text-[#BD1521]'>*</span>
						</label>
						<div className='relative'>
							<input
								type='text'
								value={formData.fullName}
								onChange={(e) => handleInputChange(e, 'fullName')}
								className='w-full p-3 border-b-2 border-[#BD1521] focus:border-[#BD1521] outline-none transition-colors placeholder-gray-400'
								placeholder='Enter your full name'
							/>
							{isValid.fullName && <span className='absolute right-3 top-1/2 -translate-y-1/2 text-[#BD1521]'>✓</span>}
						</div>
					</div>

					<div className='space-y-2'>
						<label className='block text-[#BD1521] font-medium'>
							EMAIL <span className='text-[#BD1521]'>*</span>
						</label>
						<div className='relative'>
							<input
								type='email'
								value={formData.email}
								onChange={(e) => handleInputChange(e, 'email')}
								className='w-full p-3 border-b-2 border-[#BD1521] focus:border-[#BD1521] outline-none transition-colors placeholder-gray-400'
								placeholder='Enter your email'
							/>
							{isValid.email && <span className='absolute right-3 top-1/2 -translate-y-1/2 text-[#BD1521]'>✓</span>}
						</div>
					</div>

					<div className='space-y-2'>
						<label className='block text-[#BD1521] font-medium'>PHONE</label>
						<input
							type='tel'
							value={formData.phone}
							onChange={(e) => handleInputChange(e, 'phone')}
							className='w-full p-3 border-b-2 border-[#BD1521] focus:border-[#BD1521] outline-none transition-colors placeholder-gray-400'
							placeholder='Enter your phone number'
						/>
					</div>
				</div>

				<button
					onClick={handleNext}
					className={`w-full p-4 mt-8 text-white rounded-lg transition-colors ${
						isValid.fullName && isValid.email ? 'bg-[#BD1521] hover:bg-[#a8121d]' : 'bg-gray-300 cursor-not-allowed'
					}`}
					disabled={!isValid.fullName || !isValid.email}>
					NEXT
				</button>
			</div>
		</div>
	);
}

export default function Page() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<PageContent />
		</Suspense>
	);
}
