import Badge from '@/components/badge';
import Image from 'next/image';
import './sponso.css';
import CsLogo from '/public/images/cs.webp';
import CstamLogo from '/public/images/cstam.webp';
import SbLogo from '/public/images/sb.webp';
import SectionLogo from '/public/images/section.webp';
import Sponsors from '/public/images/sponsors.webp';
export default function Sponso() {
    return (
        <section className='sponso flex flex-col items-center justify-center gap-10 md:px-40 px-10 mt-0'>
            <Badge text='Grateful Acknowledgments' />
            <h2 className='md:text-6xl text-4xl font-bold'>
                MEET OUR SPONSORS
            </h2>
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
                        src='/images/orange.webp'
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
                        The Orange Digital Center (ODC) is an initiative by the
                        telecommunications company Orange, aimed at supporting
                        digital skills training, entrepreneurship, and
                        innovation in various countries. These centers are
                        established to foster digital inclusion and empower
                        communities by providing training in technology, digital
                        tools, and business skills. They often target young
                        people, women, and underserved communities, helping
                        bridge the digital divide and enhance employability.
                    </p>
                </div>
            </div>
        </section>
    );
}
