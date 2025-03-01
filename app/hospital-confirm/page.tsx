"use client";
import React from 'react';
import { Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ProgressBar from "../components/ProgressBar";
const MessageSentPage = () => {

    const router = useRouter();
    const handleNext = () => {
        router.push("/")
    }
    return (
        <div id="idno2">
            <ProgressBar step={5} />
            <div className="container mx-auto px-4 sm:px-0 py-8 mt-5">

                {/* Header Section */}
                <div className="my-6">
                    <div className="container mx-auto">
                        <h1 className="text-[26px] font-bold text-[rgb(29,64,69)] text-center uppercase m-0 font-['Apercu-Medium']">
                            Message Sent
                        </h1>
                    </div>
                </div>

                {/* Message Content */}
                <div className="container mx-auto py-8 sm:py-5 max-w-[500px] px-4 sm:px-0">
                    <div className="bg-gray-100 text-center py-6">
                        <div className="py-6">
                            <div className="flex justify-center">
                                <div className="w-14 h-14 rounded-full bg-[rgb(29,64,69)] flex items-center justify-center">
                                    <Check className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <p className="text-[18px] text-[rgb(29,64,69)] font-bold pt-4 px-5 mb-0 font-['Apercu-Medium']">
                                Thanks for getting in touch we will get back to you as soon as possible
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="my-8 sm:my-6">
                    <p className="text-[14px] text-[rgb(29,64,69)] text-center uppercase mb-6 font-['Apercu-Medium']">
                        in the meantime
                    </p>
                    <div className="mx-auto pt-4 sm:pt-6 max-w-[600px] px-4 sm:px-0">
                        <div className="pt-4">
                            <div className="text-center">
                                <button className="w-full sm:w-[400px] bg-[rgb(29,64,69)] text-white py-4 px-8 uppercase font-['Apercu-Medium'] mt-2 sm:mt-0 hover:bg-[rgb(39,74,79)] transition-colors">
                                    Read our blog
                                </button>
                            </div>
                        </div>
                        <div className="pt-4">
                            <div className="text-center">
                                <button onClick={handleNext} className="w-full sm:w-[400px] bg-[rgb(29,64,69)] text-white py-4 px-8 uppercase font-['Apercu-Medium'] mt-2 sm:mt-0 hover:bg-[rgb(39,74,79)] transition-colors">
                                    Return to homepage
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageSentPage;