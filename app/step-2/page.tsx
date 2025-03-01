'use client';
import { useRouter } from 'next/navigation';
import { FaBuilding } from 'react-icons/fa';
import { BsFillBuildingsFill } from 'react-icons/bs';
import { Card, CardContent } from '@/components/ui/card';
import ProgressBar from '../components/ProgressBar';
import { useOrder } from '../context/OrderContext';
import { IoIosArrowBack } from 'react-icons/io';

const audienceData = [
	{ icon: <FaBuilding size={70} />, employees: 5 },
	{ icon: <FaBuilding size={70} />, employees: 10 },
	{ icon: <FaBuilding size={70} />, employees: 25 },
	{ icon: <FaBuilding size={70} />, employees: 50 },
	{ icon: <BsFillBuildingsFill size={70} />, employees: 150 },
	{ icon: <BsFillBuildingsFill size={70} />, employees: '200+' },
];

export default function BusinessInfo() {
	const router = useRouter();
	const { companyName, setCompanyName, selectedEmployees, setSelectedEmployees } = useOrder();

	const handleNext = () => {
		if (companyName && selectedEmployees) {
			router.push(`/office-3?companyName=${encodeURIComponent(companyName)}`);
		}
	};

	return (
		<div>
			<ProgressBar step={2} />
			<div className='relative w-full min-h-screen font-sans flex flex-col items-center px-4 sm:px-6 lg:px-8 pb-6 text-[#BD1521]'>
				<IoIosArrowBack
					size={30}
					className='absolute top-[20%] left-4 sm:top-20 sm:left-6 md:top-20 md:left-8 lg:top-20 lg:left-10 hover:bg-[#a2121c]/20 text-[#BD1521] p-1 rounded-full transition-colors'
					onClick={() => router.push('/step-1')}
				/>

				<h2 className='text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 mt-10 text-[#BD1521]'>
					<span className='text-[#BD1521]'>Tell us about your business</span>
				</h2>

				<div className='text-center w-full max-w-md mb-12'>
					<h3 className='text-xs sm:text-sm font-semibold tracking-wider text-[#BD1521]'>
						<span className='text-[#BD1521]'>COMPANY NAME</span>
					</h3>
					<input
						type='text'
						placeholder='Enter your company name...'
						value={companyName}
						onChange={(e) => setCompanyName(e.target.value)}
						className='mt-3 w-full px-4 py-3 text-center text-base sm:text-lg border-b-2 border-[#BD1521]/50 focus:border-[#BD1521] placeholder:text-[#BD1521]/50 outline-none transition-colors duration-200 bg-white text-[#BD1521]'
					/>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl'>
					{audienceData.map((item, index) => (
						<div key={index} className='transform transition-all duration-200 hover:scale-105'>
							<Card
								onClick={() => setSelectedEmployees(item.employees)}
								className={`cursor-pointer border-2 h-full rounded-2xl transition-colors duration-200 ${
									selectedEmployees === item.employees
										? 'border-[#BD1521] bg-[#BD1521] text-white'
										: 'border-[#BD1521]/30 hover:border-[#BD1521] hover:bg-[#BD1521]/10 text-[#BD1521]'
								}`}>
								<CardContent className='flex flex-col items-center justify-center p-6 sm:p-8'>
									<div
										className={`mb-4 transition-colors duration-200 ${
											selectedEmployees === item.employees ? 'text-white' : 'text-[#BD1521]'
										}`}>
										{item.icon}
									</div>
									<p className='text-xs sm:text-sm font-semibold tracking-wider text-inherit'>
										{item.employees} EMPLOYEES
									</p>
								</CardContent>
							</Card>
						</div>
					))}
				</div>

				<button
					className={`mt-12 px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold tracking-wider shadow-md transform transition-all duration-200 ${
						companyName && selectedEmployees
							? 'bg-[#BD1521] text-white hover:bg-[#a2121c] hover:scale-105 active:scale-95'
							: 'bg-[#BD1521]/10 text-[#BD1521]/50 cursor-not-allowed'
					}`}
					onClick={handleNext}
					disabled={!companyName || !selectedEmployees}>
					NEXT
				</button>
			</div>
		</div>
	);
}
