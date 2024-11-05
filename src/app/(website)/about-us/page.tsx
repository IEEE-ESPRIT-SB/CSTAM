import { oc, teams } from '@/constants/teams';
import CSEsprit from './_components/cs-esprit';
import EspritSb from './_components/esprit-sb';
import HeroSection from './_components/hero-section';
import TeamsSection from './_components/teams-section';

export default function AboutUsPage() {
    return (
        <main className='flex flex-col md:gap-20 gap-20 py-20 bg-background'>
            <div
                className='absolute top-0 right-0 w-[981px] h-[954px] bg-cover bg-center bg-no-repeat rounded-t-lg '
                style={{
                    backgroundImage: `url(/images/hero-about-bg.webp)`
                }}></div>

            <HeroSection />

            <div
                className='w-full md:h-[800px] h-auto bg-cover bg-center bg-no-repeat rounded-t-lg md:-mt-40 -mt-20'
                style={{
                    backgroundImage: `url(/images/esprit.webp)`
                }}></div>
            <EspritSb />
            <CSEsprit />
            <TeamsSection
                title='Our Teams'
                description='Get to know the dedicated team behind CSTAM 1.0'
                teams={teams}
            />
            {Object.entries(oc).map(([teamName, members]) => (
                <TeamsSection
                    key={teamName}
                    title={teamName}
                    teams={members as any}
                />
            ))}
        </main>
    );
}
