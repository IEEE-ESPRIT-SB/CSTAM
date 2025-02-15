import { InstagramLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className='bg-[#15151A] md:flex hidden flex-col gap-10 py-10 px-40'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col gap-4 flex-1'>
                    <Image
                        src='/images/logo.svg'
                        alt='logo CSTAM'
                        width={200}
                        height={40}
                    />
                    <p className='text-white w-1/3'>
                        CSTAM brings together members of the IEEE Computer
                        Society across Tunisia, including students and young
                        professionals and will be taking place on November 16th
                        and 17th 2024. ,{' '}
                    </p>
                </div>
                <div className='flex flex-col gap-4 self-end  w-fit'>
                    <h4 className='font-bold text-2xl uppercase'>
                        Quick Links
                    </h4>
                    <ul className='flex flex-col gap-2'>
                        <Link href='/home'>Home</Link>
                        <Link href='/about-us'>About Us</Link>
                        <Link href='/home#news-section'>Latest News</Link>
                        <Link href='/home#speakers-section'>Speakers</Link>
                        <Link href='/home#teams-section'>Team</Link>
                    </ul>
                </div>
            </div>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row items-center gap-2'>
                    <p className='text-white'>© 2024, All Rights Reserved</p>
                    <div className='bg-white h-2 w-2 rounded-full' />
                    <p className='text-white'>Powered By IEEE CS ESPRIT SBC</p>
                    <div className='bg-white h-2 w-2 rounded-full' />
                    <p className='text-white'>
                        COMPUTER SOCIETY TUNISIAN ANNUAL CONGRESS
                    </p>
                </div>
                <div className='flex flex-row gap-4'>
                    <Link
                        target='_blank'
                        href='https://www.facebook.com/IEEECSTAM'>
                        <FaFacebook size={25} />
                    </Link>
                    <Link
                        target='_blank'
                        href='https://www.instagram.com/ieeecstam/'>
                        <InstagramLogoIcon width={25} height={25} />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
