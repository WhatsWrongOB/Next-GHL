'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	message: string;
	tastingSession: boolean;
}

export default function ContactForm() {
	const router = useRouter(); // Initialize the router

	const [formData, setFormData] = useState<FormData>({
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		message: '',
		tastingSession: false,
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value, type, checked } = e.target as HTMLInputElement;
		setFormData((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Form Data:', formData);

		setTimeout(() => {
			router.push('/success');
		}, 500);
	};

	return (
		<div className='flex flex-col items-center justify-center min-h-screen px-4 bg-[#FFFFFF]'>
			{/* Consultation Section */}
			<div className='text-center max-w-2xl mb-8'>
				<h2 className='text-xl md:text-2xl font-bold text-[#BD1521] mt-10'>GET IN TOUCH TO BOOK A CONSULTATION</h2>
				<div className='mt-4'>
					<h3 className='text-sm font-semibold text-[#BD1521]'>PARTNERSHIPS</h3>
					<div className='flex justify-center items-center space-x-6 mt-2'>
						<span className='text-[#BD1521] text-lg font-bold'>Sage</span>
						<span className='bg-[#BD1521] text-white px-3 py-1 rounded text-white font-bold'>FRANKE</span>
						<span className='bg-[#BD1521] text-white rounded-full px-4 py-2 font-bold'>marco</span>
					</div>
				</div>
				<p className='mt-4 text-[#BD1521] text-sm md:text-base'>
					We can help you find the right machine for your business and the perfect coffee to go with it
				</p>
			</div>

			{/* Form Section */}
			<div className='w-full max-w-6xl p-6 rounded-md'>
				<h2 className='text-lg font-bold text-[#BD1521] mb-4'>BUSINESS NAME</h2>
				<div className='bg-[#BD1521] text-white px-4 py-3 rounded-md flex justify-between'>
					<span>REFSOFT SOLUTION</span>
					<span>✔</span>
				</div>

				{/* Form */}
				<form onSubmit={handleSubmit} className='mt-6'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						{/* First Name */}
						<div>
							<label className='block text-sm font-bold text-[#BD1521]'>FIRST NAME</label>
							<input
								type='text'
								name='firstName'
								value={formData.firstName}
								onChange={handleChange}
								placeholder='Enter first name'
								className='mt-2 p-2 w-full border border-[#BD1521] rounded-md'
								required
							/>
						</div>

						{/* Last Name */}
						<div>
							<label className='block text-sm font-bold text-[#BD1521]'>LAST NAME</label>
							<input
								type='text'
								name='lastName'
								value={formData.lastName}
								onChange={handleChange}
								placeholder='Enter last name'
								className='mt-2 p-2 w-full border border-[#BD1521] rounded-md'
								required
							/>
						</div>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
						{/* Email */}
						<div>
							<label className='block text-sm font-bold text-[#BD1521]'>EMAIL</label>
							<input
								type='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								placeholder='Enter email'
								className='mt-2 p-2 w-full border border-[#BD1521] rounded-md'
								required
							/>
						</div>

						{/* Phone Number */}
						<div>
							<label className='block text-sm font-bold text-[#BD1521]'>PHONE NUMBER</label>
							<input
								type='tel'
								name='phoneNumber'
								value={formData.phoneNumber}
								onChange={handleChange}
								placeholder='Enter phone number'
								className='mt-2 p-2 w-full border border-[#BD1521] rounded-md'
								required
							/>
						</div>
					</div>

					{/* Message */}
					<div className='mt-4'>
						<label className='block text-sm font-bold text-[#BD1521]'>HOW CAN WE HELP YOU?</label>
						<textarea
							name='message'
							value={formData.message}
							onChange={handleChange}
							placeholder='Type your message here...'
							rows={4}
							className='mt-2 p-2 w-full border border-[#BD1521] rounded-md'
							required></textarea>
					</div>

					{/* Checkbox */}
					<div className='mt-4 flex items-center'>
						<input
							type='checkbox'
							name='tastingSession'
							checked={formData.tastingSession}
							onChange={handleChange}
							className='h-5 w-5 text-[#BD1521]'
						/>
						<label className='ml-2 text-[#BD1521]'>I WANT A FREE TASTING SESSION</label>
					</div>

					{/* Submit Button */}
					<button
						type='submit'
						className='mt-6 w-full bg-[#BD1521] text-white text-lg font-bold py-3 rounded-md hover:bg-[#BD1521] hover:brightness-110 transition'>
						GET IN TOUCH
					</button>
				</form>
			</div>
		</div>
	);
}
