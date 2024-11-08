import Badge from '@/components/badge';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className='flex flex-col gap-10 md:px-40 px-10 md:w-1/2 pt-36 z-[99] md:text-foreground text-white'>
            <Badge text='About Us' />
            <div className='flex flex-col gap-4'>
                <h2 className='md:text-6xl text-4xl font-bold'>CSTAM 1.0</h2>
                <p className='md:text-lg md:py-10'>
                    CSTAM brings together members of the IEEE Computer Society
                    across Tunisia, including students and young professionals
                    and will be taking place on November 16th and 17th 2024.
                    CSTAM offers an exceptional opportunity to get involved in a
                    variety of technical challenges aimed at pushing the
                    boundaries of innovation and problem-solving.
                </p>
                <Image
                    className='md:block hidden'
                    src='/images/CSTAM LOGO.webp'
                    width={150}
                    height={38}
                    alt='CSTAM ACT logo'
                />
            </div>
        </section>
    );
}
