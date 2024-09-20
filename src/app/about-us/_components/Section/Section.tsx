import Image from 'next/image';
import Stats from '../Stats/Stats';
import './Section.css';
interface SectionProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
    image: string;
    isInverted?: boolean;
    stats?: Array<{ label: string; value: string }>;
}

const Section: React.FC<SectionProps> = ({
    title,
    subtitle,
    children,
    image,
    isInverted = false,
    stats
}) => {
    return (
        <section
            className={`section flex flex-col ${
                isInverted ? 'md:flex-row-reverse bg-secondary' : 'md:flex-row'
            } `}>
            <div className='section-content-left flex justify-center items-center md:min-w-[400px]'>
                <Image
                    src={image}
                    alt={title}
                    className='md:w-[800px] w-[80%] '
                    width={500}
                    height={0}
                />
            </div>
            <div className='section-content-right flex flex-col justify-start items-start gap-8'>
                <div className='flex flex-col '>
                    <h2 className='text-primary text-xl font-medium'>
                        {subtitle}
                    </h2>
                    <h1 className='md:text-5xl text-3xl font-bold'>{title}</h1>
                </div>
                <p className='text-light-gray'>{children}</p>
                {stats && <Stats stats={stats} />}
            </div>
        </section>
    );
};

export default Section;
