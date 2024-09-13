import Badge from '@/components/badge';
import TeamCard from '@/components/cards/team-card';
import { teams } from '@/constants/teams';

const Teams = () => {
    return (
        <section className='flex flex-col gap-4 px-40'>
            <Badge text='Our Team' />
            <h4 className='text-5xl font-bold'>
                Meet the Minds Behind CSTAM 1.0
            </h4>
            <div className='flex flex-row flex-wrap justify-between pt-10'>
                {teams.map((team, index) => (
                    <TeamCard
                        key={index}
                        name={team.name}
                        description={team.description}
                        imageUrl={team.imageUrl}
                    />
                ))}
            </div>
        </section>
    );
};

export default Teams;
