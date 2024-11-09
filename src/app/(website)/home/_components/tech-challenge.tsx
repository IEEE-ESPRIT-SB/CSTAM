import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import BadgeGlass from './badge';
import './badge.css';
import './button.css';
import ImageWithHoverEffect from './cup';
const TechChallenge = () => {
    return (
        <div className='md:px-40 px-10 flex flex-row'>
            <div className='flex-1 md:flex hidden items-center justify-center'>
                <ImageWithHoverEffect />
                {/* <Image
                    src='/images/coupe.webp'
                    width={300}
                    height={400}
                    alt='Tech Challenge'
                    id='gasses'
                    className='cup-hover mix-blend-screen'
                /> */}
            </div>
            <div className='flex flex-col gap-10 flex-1'>
                <BadgeGlass text='Technical Challenge' />
                <div className='flex flex-col gap-4'>
                    <h2 className='md:text-6xl text-4xl font-bold'>
                        Rise to the Challenge
                    </h2>
                    <p className='md:text-lg md:py-10'>
                        Develop an AI-powered infrastructure solution to
                        automate cybersecurity incident detection, response, and
                        mitigation, enhancing organizational resilience against
                        cyber threats.{' '}
                    </p>
                </div>
                <div className='flex'>
                    <a href='https://drive.google.com/file/d/1r2J-To6qXe62mGIrbUn_USfbrSlflr01/view'>
                        <Button
                            size='lg'
                            className='btn-hover color-1 pr-4 py-6'>
                            Learn More
                            <ChevronRight size={24} className='ml-4' />
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TechChallenge;
