import Link from 'next/link';
import Image from 'next/image';
import images from '@/utils/images';

const Footer = () => {
    // Navigation items data
    const navItems = [
        {
            title: 'Applications',
            links: [
                { name: 'Apparel', href: '/applications/apparel' },
                { name: 'Automotive', href: '/applications/automotive' },
                { name: 'Filtration', href: '/applications/filtration' },
                { name: 'Customised Nonwoven', href: '/applications/customised-nonwoven' }
            ],
            isBold: false
        },
        {
            title: 'Company',
            links: [
                { name: 'Who We Are', href: '/who-we-are' },
                { name: 'Global Competency', href: '/global-competency' },
                { name: 'Innovation', href: '/innovation' },
                { name: 'ESG Impact', href: '/esg-impact' }
            ],
            isBold: true
        },
        {
            title: 'MORE',
            links: [
                { name: 'Contact Us', href: '/contact-us' },
                { name: 'Careers', href: '/careers' }
            ],
            isBold: false
        },
        {
            title: 'Follow Us',
            links: [
                {
                    name: 'LinkedIn',
                    href: 'https://www.linkedin.com/company/supreme-group-company/',
                    isExternal: true
                }
            ],
            isBold: false
        }
    ];

    return (
        <footer className="text-black py-[113px] bg-footer bg-no-repeat bg-cover bg-right-bottom blade-top-padding blade-bottom-padding border-t border-opacity-10 border-gray">
            <div className="w-container max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
                <div>
                    <div>
                        <Link href="/" passHref>
                            <span>
                                <Image
                                    src={images.Logo}
                                    width={120}
                                    height={48}
                                    className="h-10 md:h-12 xlg:h-12"
                                    alt="Supreme logo"
                                    title="logo"
                                />
                            </span>
                        </Link>
                    </div>
                    <div className="hidden md:flex flex-row items-start justify-between md:pr-10 lg:gap-20 sm:gap-10 gap-4 2xl:mt-10 mt-8">
                        {navItems.map((section, index) => (
                            <ul key={index} className="grid sm:gap-5 gap-3 text-black list-none">
                                <li className={`mb-2 sg-translate uppercase ${section.isBold ? 'font-bold' : 'font-semibold'} text-opacity-90`}>
                                    {section.title}
                                </li>
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        {link.isExternal ? (
                                            <div
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block text-black text-opacity-70 hover:text-opacity-100 whitespace-nowrap xl:text-base text-sm hover:text-black font-normal transition-all duration-300"
                                            >
                                                {link.name}
                                            </div>
                                        ) : (
                                            <Link href={link.href}>
                                                <div className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100">
                                                    <span className="sg-translate">{link.name}</span>
                                                </div>
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 md:hidden items-start justify-between md:pr-10 lg:gap-20 sm:gap-10 gap-6 2xl:mt-10 mt-8">
                        {navItems.map((section, index) => (
                            <ul key={index} className="grid sm:gap-5 gap-3 text-black list-none">
                                <li className={`${section.isBold ? 'font-bold' : 'font-semibold'} uppercase text-opacity-90`}>
                                    {section.title}
                                </li>
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        {link.isExternal ? (
                                            <Link
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block text-black text-opacity-70 hover:text-opacity-100 whitespace-nowrap xl:text-base text-sm hover:text-black font-normal transition-all duration-300"
                                            >
                                                {link.name}
                                            </Link>
                                        ) : (
                                            <Link href={link.href}>
                                                <div className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100">
                                                    <span className="sg-translate">{link.name}</span>
                                                </div>
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="flex gap-3 md:flex-row flex-col justify-between items-center blade-top-padding-xl">
                    <h6 className="md:block hidden text-sm text-black whitespace-nowrap">©2024. All Rights Reserved.</h6>
                    <h6 className="md:block hidden text-sm text-black whitespace-nowrap">Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.</h6>
                    <h6 className="md:hidden block text-sm text-black whitespace-nowrap">©2024. All Rights Reserved.</h6>
                </div>
            </div>
        </footer>
    );
};

export default Footer;