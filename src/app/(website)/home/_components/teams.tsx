import TeamCard from '@/components/cards/team-card';
import { teams } from '@/constants/teams';
import BadgeGlass from './badge';

const Teams = () => {
    return (
        <section className='flex flex-col gap-10 md:px-40 px-10' id='Credits'>
            <div className='flex flex-col gap-4'>
                <BadgeGlass text='Our Team' />
                <h4 className='md:text-5xl text-4xl font-bold'>
                    Meet the Minds Behind CSTAM 1.0
                </h4>
            </div>
            <div className='flex md:flex-wrap md:flex-row flex-col md:items-start items-center md:justify-between gap-10'>
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
