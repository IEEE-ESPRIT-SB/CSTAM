'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import './badge.css';
import './button.css';
import './hero.css';
import CsLogo from '/public/images/cs.webp';
import CstamLogo from '/public/images/cstam.webp';
import SbLogo from '/public/images/sb.webp';
import SectionLogo from '/public/images/section.webp';
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
    const router = useRouter();
    return (
        <section className='h-screen w-full flex flex-col justify-center md:px-40 px-10 relative'>
            <h4 className='uppercase md:text-xl text-lg font-medium'>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('#1 cs Tunisian annual meeting')
                            .pauseFor(2500)
                            .deleteAll()
                            .start();
                    }}
                />
            </h4>

            <h1 className='md:text-8xl text-6xl font-black'>CSTAM 1.0</h1>
            <p className='md:text-lg md:mt-10 mt-5 md:max-w-[600px]'>
                CSTAM brings together members of the IEEE Computer Society
                across Tunisia, including students and young professionals and
                will be taking place on November 16th and 17th 2024.
            </p>
            <div className='flex gap-10 mt-10'>
                <Button
                    variant='secondary'
                    size='lg'
                    className='md:block hidden'
                    disabled>
                    Registration Closed
                </Button>
                <Button
                    onClick={() => router.push('/about-us')}
                    className='btn-4'
                    variant='secondary'
                    size='lg'>
                    Get in touch
                </Button>
            </div>

            <div className='absolute bottom-10 left-0 right-0 flex justify-center gap-20 overflow-x-auto overflow-hidden'>
                <Image src={CstamLogo} alt='CSTAM LOGO' height={60} />
                <Image src={CsLogo} alt='CS LOGO' height={60} />
                <Image src={SbLogo} alt='SB LOGO' height={60} />
                <Image src={SectionLogo} alt='Section LOGO' height={60} />
            </div>
        </section>
    );
};

export default HeroSection;
