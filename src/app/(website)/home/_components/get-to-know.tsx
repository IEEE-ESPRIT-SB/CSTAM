'use client';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import BadgeGlass from './badge';
import './button.css';
import './rgb.css';
const GetToKnow = () => {
    const router = useRouter();
    return (
        <section
            className=' pt-32 flex flex-col gap-10 justify-center mx:px-40 px-10 bg-center bg-cover bg-no-repeat'
            style={{
                backgroundImage: `url('/images/get-to-know.webp')`,
                height: '800px'
            }}>
            <div className='flex flex-col gap-4'>
                <BadgeGlass text='About The Event' />

                <h4 className='md:text-5xl text-4xl font-black md:w-1/2'>
                    Get To Know More About CSTAM
                </h4>
            </div>
            <p className='md:text-xl md:w-1/2'>
                CSTAM brings together members of the IEEE Computer Society
                across Tunisia, including students and young professionals and
                will be taking place on November 16th and 17th 2024.
            </p>
            <div className='flex'>
                <Button
                    onClick={() => router.push('/about-us')}
                    size='lg'
                    className='btn-hover color-1 pr-4 py-6'>
                    Learn More
                    <ChevronRight size={24} className='ml-4' />
                </Button>
            </div>
        </section>
    );
};

export default GetToKnow;
