import Badge from '@/components/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

const TechChallenge = () => {
    return (
        <div className='px-40 flex flex-row'>
            <div className='flex-1 flex items-center justify-center'>
                <Image
                    src='/images/coupe.png'
                    width={300}
                    height={400}
                    alt='Tech Challenge'
                    className=' mix-blend-screen'
                />
            </div>
            <div className='flex flex-col gap-4 flex-1'>
                <Badge text='Technical Challenge' />
                <h2 className='text-6xl font-bold'>Rise to the Challenge</h2>
                <p className='text-lg py-10'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod{' '}
                </p>
                <div className='flex'>
                    <Button size='lg' className='pr-4 py-6'>
                        Learn More
                        <ChevronRight size={24} className='ml-4' />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TechChallenge;
