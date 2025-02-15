import ProgCard from '@/components/cards/prog-card';
import { prog1 } from '@/constants/prog';
import BadgeGlass from './badge';

const Program = () => {
    return (
        <section className='flex flex-col gap-10 md:px-72 px-48'>
            <div className='flex flex-col gap-4'>
                <BadgeGlass text='Day 1 - 16 nov' />
            </div>
            <div className='flex md:flex-wrap md:flex-row flex-col md:items-start items-center md:justify-between'>
                {prog1.map((p, index) => (
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

export default Program;
