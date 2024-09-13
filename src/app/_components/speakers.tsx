import Badge from '@/components/badge';
import SpeakerCard from '@/components/cards/speaker-card';
import { speakers } from '@/constants/speakers';

const Speakers = () => {
    return (
        <section className='flex flex-col gap-4 px-40'>
            <Badge text='Our Speakers' />
            <h4 className='text-5xl font-bold'>Speaker Lineup</h4>
            <div className='flex flex-row flex-wrap justify-between pt-10'>
                {speakers.map((speaker, index) => (
                    <SpeakerCard
                        key={index}
                        name={speaker.name}
                        description={speaker.description}
                        imageUrl={speaker.imageUrl}
                    />
                ))}
            </div>
        </section>
    );
};

export default Speakers;
