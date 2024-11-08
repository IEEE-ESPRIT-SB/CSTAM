import Image from 'next/image';

export default function CSEsprit() {
    return (
        <section className='flex xl:flex-row flex-col justify-center items-center gap-10 xl:px-40 px-10'>
            <div className='flex-1 flex items-center justify-center'>
                <Image
                    src='/images/cs-logo.webp'
                    width={500}
                    height={500}
                    alt='logo cs'
                />
            </div>
            <div className='flex flex-col gap-4 flex-1'>
                <h2 className='xl:text-6xl text-4xl font-bold'>
                    IEEE ESPRIT CS SB Chapter
                </h2>
                <p className='xl:text-lg xl:py-10'>
                    The IEEE CS ESPRIT SBC is dedicated to advancing the theory,
                    practice, and application of computer and information
                    processing science and technology. Through continuous
                    workshops and efforts, we, as CS ESPRIT SBC, strive to
                    empower our members with knowledge of trending technologies.
                    We are committed to integrating members into a dynamic
                    community that fosters learning, collaboration, and
                    engagement with IEEE activities, ensuring a dynamic and
                    forward-thinking environment for aspiring professionals.
                </p>
            </div>
        </section>
    );
}
