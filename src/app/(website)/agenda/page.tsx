import HeroSection from './_components/hero-section';
import Program from './_components/program';
import Program2 from './_components/program2';

export default function AboutUsPage() {
    return (
        <main className='bg-background'>
            <HeroSection />
            <Program />
            <Program2 />
        </main>
    );
}
