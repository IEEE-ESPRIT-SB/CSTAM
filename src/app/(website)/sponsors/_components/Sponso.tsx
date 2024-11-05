import Badge from '@/components/badge';
import Image from 'next/image';
import './styleS.css';
import CsLogo from '/public/images/cs.png';
import CstamLogo from '/public/images/cstam.png';
import SbLogo from '/public/images/sb.png';
import SectionLogo from '/public/images/section.png';
import Sponsors from '/public/images/sponsors.png';
export default function Sponso() {
    return (
        <section className='flex flex-col items-center justify-center gap-10 md:px-40 px-10 mt-0'>
            <Badge text='Grateful Acknowledgments' />
            <h2 className='md:text-6xl text-4xl font-bold'>
                MEET OUR SPONSORS
            </h2>
            <p className='md:text-lg md:w-1/2 md:text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim Lorem ipsum dolor
            </p>
            <div className='bottom-10 left-0 right-0 flex justify-center gap-20 overflow-x-auto overflow-hidden mt-5'>
                <Image src={CstamLogo} alt='CSTAM LOGO' height={60} />
                <Image src={CsLogo} alt='CS LOGO' height={60} />
                <Image src={SbLogo} alt='SB LOGO' height={60} />
                <Image src={SectionLogo} alt='Section LOGO' height={60} />
            </div>
            <div className='bottom-10 left-0 right-0 flex justify-center gap-20 overflow-x-auto overflow-hidden mt-5'>
                <Image src={Sponsors} alt='CSTAM LOGO' height={60} />
            </div>
            <div className='flex md:flex-row flex-col justify-center items-center '>
                <div className='flex-1 flex items-center justify-center'>
                    <Image
                        src='/images/orange.jpg'
                        width={500}
                        height={500}
                        alt='logo orange'
                    />
                </div>
                <div className='flex flex-col gap-4 flex-1'>
                    <h2 className='md:text-6xl text-4xl font-bold text-white'>
                        <span className='text-orange-500'>Orange</span> Digital
                        Center
                    </h2>
                    <p className='md:text-lg md:py-10'>
                        The IEEE CS ESPRIT SBC is dedicated to advancing the
                        theory, practice, and application of computer and
                        information processing science and technology. Through
                        continuous workshops and efforts, we, as CS ESPRIT SBC,
                        strive to empower our members with knowledge of trending
                        technologies. We are committed to integrating members
                        into a dynamic community that fosters learning,
                        collaboration, and engagement with IEEE activities,
                        ensuring a dynamic and forward-thinking environment for
                        aspiring professionals.
                    </p>
                </div>
            </div>
        </section>
    );
}
