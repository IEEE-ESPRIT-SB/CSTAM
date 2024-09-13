import Badge from '@/components/badge';
import PostCard from '@/components/cards/post-card';
import { events } from '@/constants/events';

const NewsSection = () => {
    return (
        <section className='flex flex-col gap-10 px-40'>
            <div className='flex flex-col gap-2'>
                <Badge text='Latest News' />
                <h4 className='text-5xl font-black'>
                    Stay Updated With Our News
                </h4>
            </div>
            <div className='flex flex-wrap justify-between gap-10'>
                {events.map((event, index) => (
                    <PostCard
                        key={index}
                        imageUrl={event.imageUrl}
                        eventName={event.eventName}
                        category={event.category}
                    />
                ))}
            </div>
        </section>
    );
};

export default NewsSection;
