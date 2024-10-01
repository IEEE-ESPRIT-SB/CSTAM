import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import './badge.css';
import './button.css';
import ImageWithHoverEffect from './cup';
const TechChallenge = () => {
    return (
        <div className='md:px-40 px-10 flex flex-row'>
            <div className='flex-1 md:flex hidden items-center justify-center'>
                <ImageWithHoverEffect />
                {/* <Image
                    src='/images/coupe.png'
                    width={300}
                    height={400}
                    alt='Tech Challenge'
                    id='gasses'
                    className='cup-hover mix-blend-screen'
                /> */}
            </div>
            <div className='flex flex-col gap-10 flex-1'>
                <a href='https://twitter.com/Dave_Conner' className='btn btn-4'>
                    <span>Technical Challenge</span>
                </a>
                <div className='flex flex-col gap-4'>
                    <h2 className='md:text-6xl text-4xl font-bold'>
                        Rise to the Challenge
                    </h2>
                    <p className='md:text-lg md:py-10'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod{' '}
                    </p>
                </div>
                <div className='flex'>
                    <Button size='lg' className='btn-hover color-1 pr-4 py-6'>
                        Learn More
                        <ChevronRight size={24} className='ml-4' />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TechChallenge;
