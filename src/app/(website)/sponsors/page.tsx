import Sponso from './_components/Sponso';

export default function AboutUsPage() {
    return (
        <main className='flex flex-col md:gap-20 gap-20 py-20 bg-background'>
            <div
                className='absolute w-full h-[800px] bg-cover bg-center bg-no-repeat md:-mt-20'
                style={{
                    backgroundImage: `url(/images/sponsor-cover.webp)`
                }}></div>

            <Sponso />
        </main>
    );
}
