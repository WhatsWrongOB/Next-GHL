"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileMenuOpen]);

  return (
		<nav className='bg-[#BD1521] py-4 px-6 flex items-center justify-between relative z-10'>
			<div className='flex items-center space-x-2'>
				{/* <div className="text-yellow-600 font-bold text-lg">Logo</div> */}
				{/* <span className="text-gray-700 border-l pl-2">
          Instruct with Yourname
        </span> */}
			</div>
			<div className='hidden lg:flex space-x-6 text-white'>
				<Link href='/step-1'>
					<span className='hover:text-yellow-600'>GET STARTED</span>
				</Link>

				<Link href='/driving_lesson'>
					<span className='hover:text-yellow-600'>OFFICE</span>
				</Link>
				<Link href='/package'>
					<span className='hover:text-yellow-600'>HOSPITALITY</span>
				</Link>
				<Link href='/voucher'>
					<span className='hover:text-yellow-600'>BLOG</span>
				</Link>
				<a href='/location' className='hover:text-yellow-600'>
					CONTACT US
				</a>
				<a href='#' className='hover:text-yellow-600'>
					PACT FOR HOME
				</a>
			</div>
			<div className='hidden lg:flex space-x-4 items-center'>
				<Link href='/loginLearner'>
					<button className='border bg-white text-black border-gray-400  px-4 py-2 rounded'>Learner Login</button>
				</Link>
			</div>
			<div className='lg:hidden'>
				<button className='text-gray-700' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
					</svg>
				</button>
			</div>
			{mobileMenuOpen && (
				<div className='lg:hidden absolute top-16 left-0 w-full h-screen bg-[#F1F1F1] flex flex-col items-center space-y-4 py-4 text-gray-700 z-20'>
					<a href='#' className='hover:text-yellow-600'>
						Driving Lessons
					</a>
					<a href='#' className='hover:text-yellow-600'>
						Test Packages
					</a>
					<a href='#' className='hover:text-yellow-600'>
						Gift Vouchers
					</a>
					<a href='#' className='hover:text-yellow-600'>
						Pricing
					</a>
					<a href='#' className='hover:text-yellow-600'>
						Support
					</a>
					<button className='border border-gray-400 text-gray-700 px-4 py-2 rounded w-3/4'>Learner Login</button>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
