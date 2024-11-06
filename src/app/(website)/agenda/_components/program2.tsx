import ProgCard from '@/components/cards/prog-card';
import { prog2 } from '@/constants/prog';
import BadgeGlass from './badge';

const Program2 = () => {
    return (
        <section className='flex flex-col gap-10 md:px-72 px-48 mt-10'>
            <div className='flex flex-col gap-4'>
                <BadgeGlass text='Day 2 - 17 nov' />
            </div>
            <div className='flex md:flex-wrap md:flex-row flex-col md:items-start items-center md:justify-between'>
                {prog2.map((p, index) => (
                    <ProgCard
                        key={index}
                        eventName={p.eventName}
                        eventTime={p.eventTime}
                        number={p.number}
                        color1={p.color1}
                        color2={p.color2}
                    />
                ))}
            </div>
        </section>
    );
};

export default Program2;
