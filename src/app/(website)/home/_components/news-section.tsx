import PostCard from '@/components/cards/post-card';
import { events } from '@/constants/events';
import Link from 'next/link';
import BadgeGlass from './badge';

const NewsSection = () => {
    return (
        <section className='flex flex-col gap-10 md:px-40 px-10'>
            <div className='flex flex-col gap-4'>
                <BadgeGlass text='Latest News' />

                <h4 className='md:text-5xl text-4xl font-black'>
                    Stay Updated With Our News
                </h4>
            </div>
            <div className='flex md:flex-wrap md:flex-row flex-col md:items-start items-center md:justify-between gap-10'>
                {events.map((event, index) => (
                    <Link href={event.link} key={index} target='_blank'>
                        <PostCard
                            imageUrl={event.imageUrl}
                            eventName={event.eventName}
                            category={event.category}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default NewsSection;
