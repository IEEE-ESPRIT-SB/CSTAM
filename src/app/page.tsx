import HeroSection from './_components/hero-section';
import NewsSection from './_components/news-section';

export default function Home() {
    return (
        <main className='flex flex-col gap-32'>
            <HeroSection />
            <NewsSection />
        </main>
    );
}
