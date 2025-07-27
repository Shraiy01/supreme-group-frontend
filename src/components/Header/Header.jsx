import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import images from '@/utils/images';

export const Header = () => {
    return (
        <div className='bg-white shadow-lg'>
            <div className="px-[135px] py-[15px]">
                <div className=" flex items-center justify-between 2xl:py-2 xlg:py-1 py-2">
                    <Link href="/" aria-label="Go to home page" className="flex ">
                        <Image
                            src={images.Logo}
                            alt="Logo of Supreme with text"
                            loading="eager"
                            width={150}
                            height={40}
                            className="cursor-pointer"
                        />
                    </Link>
                    <div className="hidden items-center gap-11  justify-end md:flex">
                        <button
                            type='button'
                            className=" cursor-pointer border border-[#00BFFF] bg-[#5CD6FF] text-[#000000] rounded-[100px] py-[10px] px-[30px]"
                            aria-label="Contact Us"
                        >
                            Contact Us
                        </button>
                        <a
                            href="https://www.linkedin.com/company/supreme-group-company/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn page"
                            className="block"
                        >
                            <Image
                                src={images.linkedin}
                                alt="LinkedIn icon"
                                width={24}
                                height={24}
                            />
                        </a>

                        <button
                            className="cursor-pointer flex items-center text-[#000000] font-semibold"
                            aria-label="Change language"
                            type="button"
                        >
                            <Image
                                src={images.translate}
                                alt="Translate icon"
                                width={20}
                                height={20}
                                className="mr-2"
                            />
                            Eng
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};
